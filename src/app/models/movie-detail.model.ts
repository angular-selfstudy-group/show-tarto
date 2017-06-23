import { GenreModel } from './';
import { MediaModel } from './';

export interface MovieDetailModel extends MediaModel {
    imdb_id: string;
    title: string;
    poster: string;
    poster_bg: string;
    genres: GenreModel[];
    overview: string;
    original_language: string;
    popularity: number;
    release_date: string;
    runtime: number;
    revenue: number;
    vote_average: number;
}
