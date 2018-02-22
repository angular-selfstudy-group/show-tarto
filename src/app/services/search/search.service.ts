import { SearchService as SearchServiceBase } from 'app/services/search.service';
import { ConfigurationService } from 'app/services/configuration.service';
import { Show, MovieDetail } from 'app/models';

import { Injectable } from '@angular/core';
import { Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService extends SearchServiceBase {
    private readonly TMDB_API: string = 'https://api.themoviedb.org/3';
    private TMDB_API_POSTERS;

    private readonly API_KEY: string = '';

    constructor(private _jsonp: Jsonp, private _configService: ConfigurationService) {
        super();
        this.API_KEY = _configService.getConfigKey('apiKey');
        this.TMDB_API_POSTERS = _configService.getPictureSized;
    }

    public Search(term: string): Observable<Show[]> {
        if (!term) {
            return Observable.empty();
        }

        const uri = `/search/multi?query=${term}`;

        return this.getJSONP(uri)
            .map(resp => resp.results
                .filter(r => r.media_type === 'tv' || r.media_type === 'movie')
                .map(json => {
                    return {
                        id: json.id,
                        type: json.media_type,
                        title: json.name || json.title,
                        year: this.getYearIfAny(json),
                        posterUrl: this.getDefaultPosterIfEmpty(json.poster_path, '500')
                    } as Show;
                })
            );
    }

    public GetPopularMovieIds(): Observable<number[]> {
        const uri = '/movie/popular';

        return this.getJSONP(uri)
            .map(resp => resp.results
                .map(json => json.id)
            );
    }

    public GetMovieDetails(id: number): Observable<MovieDetail> {
        const uri = `/movie/${id}`;

        return this.getJSONP(uri)
            .map(json => {
                return {
                    id: json.id,
                    type: json.media_type,
                    imdb_id: json.imdb_id,
                    title: json.title,
                    poster: this.getDefaultPosterIfEmpty(json.poster_path, '500'),
                    poster_bg: this.getDefaultPosterIfEmpty(json.backdrop_path, '1280'),
                    genres: json.genres.map((genre) => ({
                        id: genre.id,
                        name: genre.name.toLowerCase().replace(' ', '-')
                    })),
                    overview: json.overview,
                    original_language: json.original_language.toUpperCase(),
                    popularity: json.popularity,
                    release_date: new Date(json.release_date),
                    runtime: json.runtime,
                    revenue: this.convertRevenue(json.revenue),
                    vote_average: json.vote_average
                } as MovieDetail;
            });
    }

    private getYearIfAny(json): number {
        if (json.release_date || json.first_air_date) {
            return new Date(json.release_date || json.first_air_date).getFullYear();
        }
    }

    private getJSONP(url: string): Observable<any> {
        const delimiter = url.indexOf('?') > -1 ? '&' : '?';

        return this._jsonp
            .request(`${this.TMDB_API}${url}${delimiter}api_key=${this.API_KEY}&callback=JSONP_CALLBACK`, { method: 'Get' })
            .map((resp: Response) => {
                return resp.json();
            });
    }

    private convertRevenue(x: number) {
        const convertedRevenue = x
            ? `${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} $`
            : 'Unknown'
        return convertedRevenue;
    }
    private getDefaultPosterIfEmpty(uri: string, size: string) {
        if (!uri) {
            return '../../../assets/placeholder-image.png'
        }

        return this.TMDB_API_POSTERS(size) + uri;
    }
}
