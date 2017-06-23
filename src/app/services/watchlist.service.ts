import { MediaModel } from './../models';
import { Observable } from 'rxjs/Observable';
export { MediaModel } from './../models';
export abstract class WatchListService {
    public abstract add(item: MediaModel);
    public abstract remove(item: MediaModel);
    public abstract getAll(): Observable<MediaModel[]>;
    public abstract contains(item: MediaModel): boolean;
}
