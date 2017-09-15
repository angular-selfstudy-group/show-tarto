export interface Movie {
    title: string;
}

export abstract class MovieStoreServiceBase {
    public abstract getWatchlist(): Movie[];
    public abstract addToWatchList(movie: Movie);
}
