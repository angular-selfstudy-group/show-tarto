import { Observable } from 'rxjs/Observable';
import { Show, Card, MovieDetail } from './../models';
export { Show, Card, MovieDetail };

export abstract class SearchService {
    public abstract Search(term: string): Observable<Show[]>;
    public abstract GetPopularMovies(): Observable<Card[]>
    public abstract GetMovieDetails(id: number): Observable<MovieDetail>
}
