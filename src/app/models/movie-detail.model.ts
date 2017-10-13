import { Genre } from './';
import { Media } from './';

export interface MovieDetail extends Media {
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
