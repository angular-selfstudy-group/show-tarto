import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailComponent } from './movie-detail.component';

import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from '@angular/material';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
        imports: [
            MaterialModule
        ],

        declarations: [ ActivatedRoute, MovieDetailComponent ]
    })

    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });


  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
