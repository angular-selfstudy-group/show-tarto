import { Observable } from 'rxjs/Observable';

export abstract class WatchListService {
    public abstract getAll(): Observable<number[]>;
    public abstract getWatchlist(): Observable<number[]>;
    public abstract getFavorites(): Observable<number[]>;

    public abstract addToWatchlist(id: number);
    public abstract addToFavorites(id: number);

    public abstract isFavorite(mediaId: number): boolean;
    public abstract isWatchlist(mediaId: number): boolean;

    public abstract remove(id: number);
    public abstract contains(id: number): boolean;
}
