import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Movies } from '../movie/movies';

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"]
})
export class MovieDetailComponent implements OnInit {
  @Input() display: boolean;
  @Input() list: any;
  @Output() displayChange = new EventEmitter();
  constructor() {}

  ngOnInit() {
  }

  onClose() {
    this.displayChange.emit(false);
  }

  // Work against memory leak if component is destroyed
  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }
}
