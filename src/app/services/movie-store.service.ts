export interface Movie {
    title: string;
}

export abstract class MovieStoreService {
    public abstract getWatchlist(): Movie[];
    public abstract addToWatchList(movie: Movie);
}
