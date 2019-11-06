import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MovieComponent } from './movie.component';
import { MovieService } from './movie.service';
import {TableModule} from 'primeng/table';
import { MovieDetailModule } from '../movie-detail/movie-detail.module';

@NgModule({
  declarations: [
    MovieComponent
  ],
  exports: [
      MovieComponent
    ],
  imports: [
    TableModule,
    HttpClientModule,
    MovieDetailModule
  ],
  providers: [
    MovieService
  ]
})
export class MovieModule { }
