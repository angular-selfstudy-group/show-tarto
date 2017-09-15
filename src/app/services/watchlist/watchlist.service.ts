import { Injectable } from '@angular/core';
import { WatchListService as WatchListServiceBase, MediaModel } from '../watchlist.service';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WatchListService implements WatchListServiceBase {
    constructor(private _dataService: DataService) { }

    private addMovie(item: MediaModel) {
        item.addedDate = new Date();
        let savedList = this.fetchStorageItems();
        if (savedList) {
            savedList[item.id] = item;
        } else {
            savedList = { [item.id]: item };
        }
        this._dataService.SaveItem(savedList);
    }

    public addToWatchlist(item: MediaModel) {
        item.isWatchlist = true;
        this.addMovie(item);
    }

    public addToFavorites(item: MediaModel) {
        item.isFavorite = true;
        this.addMovie(item);
    }

    public isWatchlist(mediaId: number): boolean {
        const savedList = this.fetchStorageItems();
        const mediaItem = savedList[mediaId];

        return mediaItem && mediaItem.isWatchlist;
    }

    public isFavorite(mediaId: number): boolean {
        const savedList = this.fetchStorageItems();
        const mediaItem = savedList[mediaId];

        return mediaItem && mediaItem.isFavorite;
    }

    public remove(item: MediaModel) {
        const savedList = this.fetchStorageItems();
        if (savedList) {
            delete savedList[item.id];
            this._dataService.SaveItem(savedList);
        }
    }

    private getMoviesBy(filter: (show: MediaModel) => boolean): Observable<MediaModel[]> {
        const savedList = this.fetchStorageItems();
        const watchList = new Observable<MediaModel[]>(observer => {
            if (savedList) {
                const arr = [] as MediaModel[];
                for (const key in savedList) {
                    if (savedList.hasOwnProperty(key)) {
                        const element = savedList[key];
                        if (filter(element)) {
                            arr.push(element);
                        }
                    }
                }
                observer.next(arr);
            }
        });
        return watchList;
    }
    public getAll(): Observable<MediaModel[]> {
        return this.getMoviesBy(movie => true);
    }

    public getWatchlist(): Observable<MediaModel[]> {
        return this.getMoviesBy(movie => movie.isWatchlist);
    }

    public getFavorites(): Observable<MediaModel[]> {
        return this.getMoviesBy(movie => movie.isFavorite);
    }

    public contains(item: MediaModel): boolean {
        const savedList = this.fetchStorageItems();
        if (!savedList) {
            return false;
        }

        return savedList[item.id] != null;
    }

    private fetchStorageItems(): { [id: number]: MediaModel } {
        return this._dataService.GetAll<{ [id: number]: MediaModel }>();
    }
}
