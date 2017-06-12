import { Injectable } from '@angular/core';

export abstract class DataService{
    public abstract SaveItem(item:any) :void;
    public abstract GetItem<T>(key:string) : T;
    public abstract RemoveItem<T>(key:string) : void;
}
