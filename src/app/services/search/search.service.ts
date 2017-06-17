import { SearchService as SearchServiceBase, Show } from '../search.service';
import { ConfigurationService } from 'app/services';

import { Injectable } from '@angular/core';
import { Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { CardModel, MovieDetailModel } from './../../models';


@Injectable()
export class SearchService extends SearchServiceBase {
    private readonly TMDB_API: string = 'https://api.themoviedb.org/3/';
    private readonly TMDB_API_POSTERS: string = 'https://image.tmdb.org/t/p/w1000';

    private readonly API_KEY: string = '';

    constructor(private _jsonp: Jsonp, private _configService: ConfigurationService) {
        super();
        this.API_KEY = _configService.getConfigKey('apiKey');
    }

    public Search(term: string): Observable<Show[]> {
        if (!term) {
            return Observable.empty();
        }

        return this._jsonp
            .request(`${this.TMDB_API}search/multi?query=${term}&api_key=${this.API_KEY}&callback=JSONP_CALLBACK`, { method: 'Get' })
            .map((resp: Response) => {
                return resp.json()
                    .results
                    .filter(r => r.media_type === 'tv' || r.media_type === 'movie')
                    .map(json => {
                        return {
                            title: json.name || json.title,
                            year: json.release_date || json.first_air_date,
                            posterUrl: json.backdrop_path || json.poster_path
                                ? this.TMDB_API_POSTERS + (json.backdrop_path || json.poster_path)
                                : '../../../assets/placeholder-image.png'
                        } as Show;
                    });
            });
    }

    public GetPopularMovies(): Observable<CardModel[]> {
        return this._jsonp
            .request(`${this.TMDB_API}movie/popular?api_key=${this.API_KEY}&callback=JSONP_CALLBACK`, { method: 'Get' })
            .map((resp: Response) => {
                return resp.json()
                    .results
                    .map(json => {
                        return {
                            title: json.name || json.title,
                            releaseYear: json.release_date,
                            posterUrl: json.backdrop_path || json.poster_path
                                ? this.TMDB_API_POSTERS + (json.backdrop_path || json.poster_path)
                                : '../../../assets/placeholder-image.png',
                            description: json.overview,
                            id: json.id
                        } as CardModel;
                    });
            });
    }

    public GetMovieDetails(id: number): Observable<MovieDetailModel> {
        return this._jsonp
            .request(`${this.TMDB_API}movie/${id}?api_key=${this.API_KEY}&callback=JSONP_CALLBACK`,  { method: 'Get' })
            .map((resp: Response) => {
                let obj = resp.json();
                let convertedModel = Object.assign({}, {
                        id: obj.id,
                        imdb_id: obj.imdb_id,
                        title: obj.title,
                        poster: this.TMDB_API_POSTERS + obj.poster_path,
                        genres: obj.genres,
                        overview: obj.overview
                    })
                return convertedModel as MovieDetailModel;
            });
    }
}
