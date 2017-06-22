export abstract class DataService {
    public abstract SaveItem(item: any): void;
    public abstract GetItem<T>(key: string): T;
    public abstract RemoveItem(key: string): void;
    public abstract GetAll<T>(): T;
}
