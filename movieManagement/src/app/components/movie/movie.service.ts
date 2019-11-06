import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Movies } from "./movies";

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http
      .get("https://ghibliapi.herokuapp.com/films")
      .toPromise()
      .then(res => res as Movies[]);
  }
}
