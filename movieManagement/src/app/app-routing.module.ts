import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'movie' },
  {
    path: 'movie',
    loadChildren: './components/movie/movie.module#MovieModule'
  },
  {
    path: 'menu2',
    loadChildren: './components/menutwo/menutwo.module#MenuTwoModule'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
