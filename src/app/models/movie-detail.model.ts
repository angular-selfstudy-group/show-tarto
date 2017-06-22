import { GenreModel } from "app/models";

export interface MovieDetailModel {
    id: number;
    imdb_id: string;
    title: string;
    poster: string;
    genres: GenreModel[];
    overview: string;
    original_language: string;
    popularity: number;
    release_date: string;
    runtime: number;
    revenue: number;
    vote_average: number;
}
