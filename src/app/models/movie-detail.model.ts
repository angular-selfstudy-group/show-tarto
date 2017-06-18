import { GenreModel } from "app/models";

export interface MovieDetailModel {
    id: number;
    imdb_id: string;
    title: string;
    poster: string;
    genres: GenreModel[];
    overview: string;
}
