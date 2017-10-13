import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params } from '@angular/router';
import { MdIconModule, MdButtonToggleModule } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { MockSearchService } from 'app/pages/movie-detail/movie-detail.mock';
import { WatchListService, SearchService } from 'app/services/index';
import { MovieDetailModel, GenreModel, MediaModel } from 'app/models';
import { MoviesComponent } from './movies.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieCardModule } from '../../components/movie-card/movie-card.module';
import { FormsModule } from '@angular/forms';

class MockWatchListService extends WatchListService {
  public getAll(): Observable<MediaModel[]> {
    return Observable.empty();
  }
  public getWatchlist(): Observable<MediaModel[]> {
    return Observable.empty();
  }
  public getFavorites(): Observable<MediaModel[]> {
    return Observable.empty();
  }
  public contains(item: MediaModel): boolean {
    return false;
  }
  public isFavorite(id: number): boolean {
    return true;
  }
  public isWatchlist(id: number): boolean {
    return true;
  }
  public remove(Model: MovieDetailModel) { }
  public addToFavorites(Model: MovieDetailModel) { }
  public addToWatchlist(Model: MovieDetailModel) { }
}

class MockActivatedRoute {
  snapshot = {
    data: {
      filterType: 1
    }
  };
}

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdIconModule, MdButtonToggleModule, BrowserAnimationsModule, MovieCardModule, FormsModule],
      declarations: [MoviesComponent],
      providers: [
        { provide: SearchService, useClass: MockSearchService },
        { provide: WatchListService, useClass: MockWatchListService },
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
