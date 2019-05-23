import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsteroidsComponent } from './asteroids/asteroids.component';

const routes: Routes = [
  { path: '', redirectTo: 'apod', pathMatch:'full' },
  { path: 'asteroids', component: AsteroidsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
