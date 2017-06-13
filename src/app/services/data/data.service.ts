import { Injectable } from '@angular/core';
import { DataService as DataServiceBase } from '../data.service'

@Injectable()
export class DataService extends DataServiceBase {

    private static storageKey = 'st.storage';

    public SaveItem(item: any): void {
        localStorage.setItem(DataService.storageKey, JSON.stringify(item));
    }

    public GetItem<T>(key: string): T {
        const item = localStorage.getItem(key);
        return JSON.parse(item) as T;
    }

    public RemoveItem(key: string): void {
        localStorage.removeItem(key);
    }
}
