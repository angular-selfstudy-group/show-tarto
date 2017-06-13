import { Observable } from 'rxjs/Observable';

export interface Show {
	title: string;
	year: number;
	posterUrl: string;
}

export abstract class SearchService {
    public abstract Search(term: string): Observable<Show[]> ;
}
