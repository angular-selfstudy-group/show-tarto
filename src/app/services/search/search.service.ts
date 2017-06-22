import { SearchService as SearchServiceBase } from '../search.service';
import { ConfigurationService } from 'app/services';
import { Show, CardModel, MovieDetailModel } from './../../models';

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

		let uri = `/search/multi?query=${term}`;

		return this.getJSONP(uri)
			.map(json => json.results
				.filter(r => r.media_type === 'tv' || r.media_type === 'movie')
				.map(json => {
					return {
						title: json.name || json.title,
						year: this.getYearIfAny(json),
						posterUrl: this.getDefaultPosterIfEmpty(json.backdrop_path || json.poster_path, '500')
					} as Show;
				})
		);
	}

	public GetPopularMovies(): Observable<CardModel[]> {
		let uri = '/movie/popular';

		return this.getJSONP(uri)
			.map(json => json.results
				.map(json => {
					return {
						id: json.id,
						title: json.title,
						description: json.overview,
						releaseYear: json.release_date,
						posterUrl: this.getDefaultPosterIfEmpty(json.backdrop_path || json.poster_path, '1000')
					} as CardModel;
				})
			);
	}

	public GetMovieDetails(id: number): Observable<MovieDetailModel> {
		let uri = `/movie/${id}`;

		return this.getJSONP(uri)
			.map(json => {
				return {
					id: json.id,
					imdb_id: json.imdb_id,
					title: json.title,
					poster: this.getDefaultPosterIfEmpty(json.poster_path, '500'),
					genres: json.genres,
					overview: json.overview,
                    original_language: json.original_language,
                    popularity: json.popularity,
                    release_date: json.release_date,
                    runtime: json.runtime,
                    revenue: json.revenue,
                    vote_average: json.vote_average
				} as MovieDetailModel;
			});
	}

	private getYearIfAny(json): number {
		if(json.release_date || json.first_air_date)
			return new Date(json.release_date || json.first_air_date).getFullYear();
	}

	private getJSONP(url: string) : Observable<any> {
		let delimiter = url.indexOf('?') > -1 ? '&' : '?';

		return this._jsonp
			.request(`${this.TMDB_API}${url}${delimiter}api_key=${this.API_KEY}&callback=JSONP_CALLBACK`,  { method: 'Get' })
			.map((resp: Response) => {
				return resp.json();
			});
	}

	private getDefaultPosterIfEmpty(uri: string, size: string) {
		if(!uri)
			return '../../../assets/placeholder-image.png'

		return this.TMDB_API_POSTERS(size) + uri;
	}
}
