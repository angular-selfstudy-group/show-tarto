import { Observable } from 'rxjs/Rx';
import { MovieDetail, Genre } from 'app/models';
import { MovieDetailComponent } from 'app/pages/movie-detail/movie-detail.component';

const mockData: MovieDetail = {
    id: 328,
    type: 'json.media_type',
    imdb_id: 'tt0369610',
    title: 'json.title',
    poster: '/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg',
    poster_bg: '/dkMD5qlogeRMiEixC4YNPUvax2T.jpg',
    genres: [
        { id: 28, name: 'action' } as Genre,
        { id: 12, name: 'adventure' } as Genre,
        { id: 878, name: 'science-fiction' } as Genre,
        { id: 53, name: 'thriller' } as Genre
    ] as Genre[],
    overview: 'Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning ' +
    'dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.',
    original_language: 'EN',
    popularity: 34.393394,
    release_date: new Date('2015-06-09'),
    runtime: 124,
    revenue: '1.513.528.810$',
    vote_average: 6.5
} as MovieDetail;

export class MockSearchService {
    public GetMovieDetails(id: number): Observable<MovieDetail> {
        return Observable.of(mockData);
    }
}
