import { MediaModel } from './';

export interface Show extends MediaModel {
    title: string;
    year: number;
    posterUrl: string;
}
