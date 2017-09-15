import { MediaModel } from './../models';
import { Observable } from 'rxjs/Observable';
export { MediaModel } from './../models';
export abstract class WatchListService {
    public abstract getAll(): Observable<MediaModel[]>;
    public abstract getWatchlist(): Observable<MediaModel[]>;
    public abstract getFavorites(): Observable<MediaModel[]>;

    public abstract addToWatchlist(item: MediaModel);
    public abstract addToFavorites(item: MediaModel);

    public abstract isFavorite(mediaId: number): boolean;
    public abstract isWatchlist(mediaId: number): boolean;

    public abstract remove(item: MediaModel);
    public abstract contains(item: MediaModel): boolean;
}
