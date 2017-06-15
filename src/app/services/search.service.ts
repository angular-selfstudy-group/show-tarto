import { Observable } from 'rxjs/Observable';
import { CardModel } from './../models';

export interface Show {
	title: string;
	year: number;
	posterUrl: string;
}

export abstract class SearchService {
	public abstract Search(term: string): Observable<Show[]>;
	public abstract GetPopularMovies(): Observable<CardModel[]>
}
