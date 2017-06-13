import { SearchService as SearchServiceBase, Show } from '../search.service'

import { Injectable } from '@angular/core';
import { Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchService extends SearchServiceBase {
	private readonly TMDB_API = "https://api.themoviedb.org/3/";
	private readonly TMDB_API_POSTERS = "https://image.tmdb.org/t/p/w500";

	private readonly API_KEY = "";
	
	constructor(private jsonp: Jsonp) { 
		super();
	}

	public Search(term: string): Observable<Show[]> {
		if(!term)
			return Observable.empty();

		return this.jsonp
			.request(this.TMDB_API + 'search/multi?query=' + term + '&api_key=' + this.API_KEY + "&callback=JSONP_CALLBACK", {method: 'Get'})
			.map((resp: Response) => {
				return resp.json()
					.results
					.filter(r => r.media_type == 'tv' || r.media_type == 'movie')
					.map(json => {
						return {
							title: json.name || json.title,
							year: json.release_date || json.first_air_date,
							posterUrl: this.TMDB_API_POSTERS + (json.backdrop_path || json.poster_path)
						} as Show;
					});
			});
	}

}
