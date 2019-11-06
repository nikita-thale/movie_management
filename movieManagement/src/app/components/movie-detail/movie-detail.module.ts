import { NgModule } from '@angular/core';
import {DialogModule} from 'primeng/dialog';

import { MovieDetailComponent } from './movie-detail.component';

@NgModule({
  declarations: [
    MovieDetailComponent
  ],
  exports: [
      MovieDetailComponent
    ],
  imports: [
    DialogModule
  ],
  providers: [
  ]
})
export class MovieDetailModule { }
