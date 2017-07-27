import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailModel } from 'app/models';
import { SearchService } from './../../services';

@Component({
  selector: 'st-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  private Model: MovieDetailModel;
  private id: number;
  public isLoading: boolean;

  constructor(private route: ActivatedRoute, private _searchService: SearchService) { }

  ngOnInit() {
    this.isLoading = true;
    this.id = +this.route.snapshot.params.id;
    this._searchService.GetMovieDetails(this.id).subscribe(result => {
      this.Model = result;
      this.isLoading = false;
    });
  }
}
