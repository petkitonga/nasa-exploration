import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { ApodComponent } from './apod.component';

const routes: Routes = [
    {
        path: 'apod', 
        component: ApodComponent,
        children: [
            { path: '', redirectTo: (new Date().toISOString().split('T')[0]), pathMatch:'full' },
            { path: ':routeDate', component: PhotoDetailComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class ApodRoutingModule { }