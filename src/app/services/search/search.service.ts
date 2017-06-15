import { SearchService as SearchServiceBase, Show } from '../search.service';
import { ConfigurationService } from 'app/services';

import { Injectable } from '@angular/core';
import { Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchService extends SearchServiceBase {
    private config;

    private TMDB_API: string;
    private TMDB_API_POSTERS: string;
    private TMDB_API_KEY: string;

    constructor(private _jsonp: Jsonp, private _configService: ConfigurationService) {
        super();
        this.config = _configService.getConfig();

        this.TMDB_API_KEY = this.config['apiKey'];
        this.TMDB_API = this.config['apiUrl'];
        this.TMDB_API_POSTERS = this.config['apiPosterUrl'];
    }

    public Search(term: string): Observable<Show[]> {
        if (!term) {
            return Observable.empty();
        }

        return this._jsonp
            .request(`${this.TMDB_API}search/multi?query=${term}&api_key=${this.TMDB_API_KEY}&callback=JSONP_CALLBACK`, { method: 'Get' })
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

}
