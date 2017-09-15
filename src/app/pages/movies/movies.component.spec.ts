/* import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { MockSearchService } from 'app/shared/mocks/service/movie-detail.mock';
import { WatchListService, SearchService } from 'app/services/index';
import { MovieDetailModel, GenreModel } from 'app/models';
import { MoviesComponent } from './movies.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';


class MockWatchListService {
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
    params: {
      id: 328
    }
  };
}

//
describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [MoviesComponent],
      providers: [
        { provide: SearchService, useClass: MockSearchService },
        { provide: WatchListService, useClass: MockWatchListService },
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    })

    fixture = TestBed
      .createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

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
 */
