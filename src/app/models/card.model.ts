import { MediaModel } from './';

export interface CardModel extends MediaModel {
    title: string;
    description: string;
    releaseYear: number;
    posterUrl: string
}

