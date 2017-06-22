import { Injectable } from '@angular/core';
import { WatchListService as WatchListServiceBase, MediaModel } from '../watchlist.service';
import { DataService } from '../data.service';

@Injectable()
export class WatchListService implements WatchListServiceBase {

    constructor(private _dataService: DataService) { }
    public add(item: MediaModel) {
        item.addedDate = new Date();
        let savedList = this._dataService.GetAll<{ [id: number]: MediaModel }>();
        if (savedList) {
            savedList[item.id] = item;
        } else {
            savedList = { [item.id]: item };
        }
        this._dataService.SaveItem(savedList);
    }
    public remove(item: MediaModel) {
        const savedList = this._dataService.GetAll<{ [id: number]: MediaModel }>();
        if (savedList) {
            delete savedList[item.id];
            this._dataService.SaveItem(savedList);
        }
    }
    public getAll(): MediaModel[] {
        throw new Error('Method not implemented.');
    }

    public contains(item: MediaModel): boolean {
        const savedList = this._dataService.GetAll<{ [id: number]: MediaModel }>();
        if (!savedList) {
            return false;
        }

        return savedList[item.id] != null;
    }
}
