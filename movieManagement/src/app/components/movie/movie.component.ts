import { Component, OnInit } from "@angular/core";
import { TableModule } from "primeng/table";
import { Movies } from "./movies";
import { MovieService } from "./movie.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  movies: Movies[];
  list: any;
  display: boolean = false;
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getAllMovies().then(movies => (this.movies = movies));
  }

  showDetail(movie) {
    this.list = movie;
    this.display = true;
  }

  onDialogClose(event) {
    this.display = event;
  }
}
