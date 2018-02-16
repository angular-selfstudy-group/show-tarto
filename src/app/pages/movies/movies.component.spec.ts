import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params } from '@angular/router';
import { MatIconModule, MatButtonToggleModule } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { MockSearchService } from 'app/pages/movie-detail/movie-detail.mock';
import { WatchListService, SearchService } from 'app/services';
import { MovieDetail, Genre } from 'app/models';
import { MoviesComponent } from './movies.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieCardModule } from 'app/components/movie-card/movie-card.module';
import { FormsModule } from '@angular/forms';

class MockWatchListService extends WatchListService {
  public getAll(): Observable<number[]> {
    return Observable.empty();
  }
  public getWatchlist(): Observable<number[]> {
    return Observable.empty();
  }
  public getFavorites(): Observable<number[]> {
    return Observable.empty();
  }
  public contains(item: number): boolean {
    return false;
  }
  public isFavorite(id: number): boolean {
    return true;
  }
  public isWatchlist(id: number): boolean {
    return true;
  }
  public remove(Model: number) { }
  public addToFavorites(Model: number) { }
  public addToWatchlist(Model: number) { }
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
      imports: [MatIconModule, MatButtonToggleModule, BrowserAnimationsModule, MovieCardModule, FormsModule],
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
