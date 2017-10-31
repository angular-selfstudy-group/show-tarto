import { Observable } from 'rxjs/Observable';
import { Show, MovieDetail } from './../models';
export { Show, MovieDetail };

export abstract class SearchService {
    public abstract Search(term: string): Observable<Show[]>;
    public abstract GetPopularMovieIds(): Observable<number[]>
    public abstract GetMovieDetails(id: number): Observable<MovieDetail>
}
