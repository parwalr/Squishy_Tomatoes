import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { NewReviewComponent } from './new-review/new-review.component';


const routes: Routes = [
  {path: "movies", pathMatch:"full", component: HomeComponent},
  {path: "movies/new", component: NewMovieComponent},
  {path: "movies/:id", component: DetailComponent},
  {path: "movies/:id/review", component: NewReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
