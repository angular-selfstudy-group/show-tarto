import { Media } from './';

export interface Card extends Media {
    title: string;
    description: string;
    releaseYear: number;
    posterUrl: string
}

