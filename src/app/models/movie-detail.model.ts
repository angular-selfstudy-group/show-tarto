import { Genre } from './';

export interface MovieDetail {
    id: number;
    imdb_id: string;
    title: string;
    poster: string;
    poster_bg: string;
    genres: Genre[];
    overview: string;
    original_language: string;
    popularity: number;
    release_date: string | Date;
    runtime: number;
    revenue: number | string;
    vote_average: number;
}
