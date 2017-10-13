import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'app/models';
import { SearchService, WatchListService } from './../../services';

@Component({
  selector: 'st-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public Model: MovieDetail;
  public id: number;
  public isLoading: boolean;
  public isFavorite: boolean;
  public isWatchlist: boolean;

  constructor(private route: ActivatedRoute, private searchService: SearchService, private watchlistService: WatchListService) { }

  ngOnInit() {
    this.isLoading = true;
    this.id = +this.route.snapshot.params.id;
    this.searchService.GetMovieDetails(this.id).subscribe(result => {
      this.Model = result;
      this.isLoading = false;
    });
    this.isFavorite = this.watchlistService.isFavorite(this.id);
    this.isWatchlist = this.watchlistService.isWatchlist(this.id);
  }

  toggleFavorite() {
    if (this.isFavorite) {
      this.watchlistService.remove(this.Model);
    } else {
      this.watchlistService.addToFavorites(this.Model);
    }

    this.isFavorite = !this.isFavorite;
  }

  toggleWatchlist() {
    if (this.isWatchlist) {
      this.watchlistService.remove(this.Model);
    } else {
      this.watchlistService.addToWatchlist(this.Model);
    }

    this.isWatchlist = !this.isWatchlist;
  }
}
