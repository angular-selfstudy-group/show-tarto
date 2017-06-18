import { Observable } from 'rxjs/Observable';
import { Show, CardModel, MovieDetailModel } from './../models';

export abstract class SearchService {
	public abstract Search(term: string): Observable<Show[]>;
	public abstract GetPopularMovies(): Observable<CardModel[]>
	public abstract GetMovieDetails(id: number): Observable<MovieDetailModel>
}
