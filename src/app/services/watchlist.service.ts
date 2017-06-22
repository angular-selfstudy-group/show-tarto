import { MediaModel } from './../models';
export { MediaModel } from './../models';
export abstract class WatchListService {
    public abstract add(item: MediaModel);
    public abstract remove(item: MediaModel);
    public abstract getAll(): MediaModel[];
    public abstract contains(item: MediaModel): boolean;
}
