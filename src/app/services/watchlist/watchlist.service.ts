import { Injectable } from '@angular/core';
import { WatchListService as WatchListServiceBase } from '../watchlist.service';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

interface Media {
    id: number;
    addedDate: Date;
    isFavorite: boolean;
    isWatchlist: boolean;
    type: string;
}

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

    public addToWatchlist(id: number) {
        const savedList = this.fetchStorageItems();
        let mediaItem = savedList[id];

        if (!mediaItem) {
            mediaItem = {
                addedDate: new Date(),
                id: id,
                isFavorite: false
            } as Media
        }

        mediaItem.isWatchlist = true;
        this.addMovie(mediaItem);
    }

    public addToFavorites(id: number) {
        const savedList = this.fetchStorageItems();
        let mediaItem = savedList[id];

        if (!mediaItem) {
            mediaItem = {
                addedDate: new Date(),
                id: id,
                isWatchlist: false
            } as Media
        }

        mediaItem.isFavorite = true;

        this.addMovie(mediaItem);
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

    public remove(id: number) {
        const savedList = this.fetchStorageItems();
        delete savedList[id];
        this._dataService.SaveItem(savedList);

    }

    private getMoviesBy(filter: (show: Media) => boolean): Observable<number[]> {
        const savedList = this.fetchStorageItems();
        const watchList = new Observable<number[]>(observer => {
            const arr = [] as number[];
            for (const key in savedList) {
                if (savedList.hasOwnProperty(key)) {
                    const element = savedList[key];
                    if (filter(element)) {
                        arr.push(element.id);
                    }
                }
            }
            observer.next(arr);
        });
        return watchList;
    }
    public getAll(): Observable<number[]> {
        return this.getMoviesBy(movie => true);
    }

    public getWatchlist(): Observable<number[]> {
        return this.getMoviesBy(movie => movie.isWatchlist);
    }

    public getFavorites(): Observable<number[]> {
        return this.getMoviesBy(movie => movie.isFavorite);
    }

    public contains(id: number): boolean {
        const savedList = this.fetchStorageItems();
        return savedList[id] != null;
    }

    private fetchStorageItems(): { [id: number]: Media } {
        return this._dataService.GetAll<{ [id: number]: Media }>() || {};
    }
}
