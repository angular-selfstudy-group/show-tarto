import { GenreModel } from './';
import { MediaModel } from './';

export interface MovieDetailModel extends MediaModel {
    imdb_id: string;
    title: string;
    poster: string;
    backdrop_image: string;
    genres: GenreModel[];
    overview: string;
    original_language: string;
    popularity: number;
    release_date: string;
    runtime: number;
    revenue: number | string;
    vote_average: number;
}
