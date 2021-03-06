import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { MockSearchService } from 'app/pages/movie-detail/movie-detail.mock';

import { WatchListService, SearchService } from 'app/services/index';
import { MovieDetail, Genre } from 'app/models';
import { MovieDetailComponent } from './movie-detail.component';

import { MatProgressSpinnerModule, MatIconModule, MatButtonModule } from '@angular/material';

class MockWatchListService {
  public isFavorite(id: number): boolean {
    return true;
  }
  public isWatchlist(id: number): boolean {
    return true;
  }
  public remove(Model: MovieDetail) { }
  public addToFavorites(Model: MovieDetail) { }
  public addToWatchlist(Model: MovieDetail) { }
}

class MockActivatedRoute {
  snapshot = {
    params: {
      id: 328
    }
  };
}

describe('Movie Detail Component', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule, MatIconModule, MatButtonModule],
      declarations: [MovieDetailComponent],
      providers: [
        { provide: SearchService, useClass: MockSearchService },
        { provide: WatchListService, useClass: MockWatchListService },
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    })

    fixture = TestBed
    .overrideComponent(MovieDetailComponent, {
      set: {
        template: '<span>Hello</span>'
      }
    })
    .createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
