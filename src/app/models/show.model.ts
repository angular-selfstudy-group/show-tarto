import { Media } from './';

export interface Show extends Media {
    title: string;
    year: number;
    posterUrl: string;
}
