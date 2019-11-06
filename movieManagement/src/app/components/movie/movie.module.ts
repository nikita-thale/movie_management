import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MovieComponent } from './movie.component';
import { MovieService } from './movie.service';
import {TableModule} from 'primeng/table';
import { MovieDetailModule } from '../movie-detail/movie-detail.module';

const routes: Routes = [
  { path: '', component: MovieComponent },
];

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
    MovieDetailModule,
    [RouterModule.forChild(routes)]
  ],
  providers: [
    MovieService
  ]
})
export class MovieModule { }
