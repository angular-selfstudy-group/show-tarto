import { Injectable } from '@angular/core';
import { WatchListService as WatchListServiceBase, Media } from '../watchlist.service';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WatchListService implements WatchListServiceBase {
    constructor(private _dataService: DataService) { }

    private addMovie(item: Media) {
        item.addedDate = new Date();
        let savedList = this.fetchStorageItems();
        if (savedList) {
            savedList[item.id] = item;
        } else {
            savedList = { [item.id]: item };
        }
        this._dataService.SaveItem(savedList);
    }

    public addToWatchlist(item: Media) {
        item.isWatchlist = true;
        this.addMovie(item);
    }

    public addToFavorites(item: Media) {
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

    public remove(item: Media) {
        const savedList = this.fetchStorageItems();
        if (savedList) {
            delete savedList[item.id];
            this._dataService.SaveItem(savedList);
        }
    }

    private getMoviesBy(filter: (show: Media) => boolean): Observable<Media[]> {
        const savedList = this.fetchStorageItems();
        const watchList = new Observable<Media[]>(observer => {
            if (savedList) {
                const arr = [] as Media[];
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
    public getAll(): Observable<Media[]> {
        return this.getMoviesBy(movie => true);
    }

    public getWatchlist(): Observable<Media[]> {
        return this.getMoviesBy(movie => movie.isWatchlist);
    }

    public getFavorites(): Observable<Media[]> {
        return this.getMoviesBy(movie => movie.isFavorite);
    }

    public contains(item: Media): boolean {
        const savedList = this.fetchStorageItems();
        if (!savedList) {
            return false;
        }

        return savedList[item.id] != null;
    }

    private fetchStorageItems(): { [id: number]: Media } {
        return this._dataService.GetAll<{ [id: number]: Media }>();
    }
}
