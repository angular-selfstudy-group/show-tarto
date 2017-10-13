import { Media } from './../models';
import { Observable } from 'rxjs/Observable';
export { Media } from './../models';
export abstract class WatchListService {
    public abstract getAll(): Observable<Media[]>;
    public abstract getWatchlist(): Observable<Media[]>;
    public abstract getFavorites(): Observable<Media[]>;

    public abstract addToWatchlist(item: Media);
    public abstract addToFavorites(item: Media);

    public abstract isFavorite(mediaId: number): boolean;
    public abstract isWatchlist(mediaId: number): boolean;

    public abstract remove(item: Media);
    public abstract contains(item: Media): boolean;
}
