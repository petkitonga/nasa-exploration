import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApodComponent } from './apod/apod.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';

const routes: Routes = [
  { path: '', component: ApodComponent },
  { path: 'apod', component: ApodComponent },
  { path: 'asteroids', component: AsteroidsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
