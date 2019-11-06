import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { MovieModule } from '../movie/movie.module';

@NgModule({
  declarations: [
    NavComponent
  ],
  exports: [
      NavComponent
    ],
  imports: [
    MovieModule
  ],
  providers: []
})
export class NavModule { }
