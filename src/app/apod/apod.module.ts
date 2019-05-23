import { NgModule } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { ApodComponent } from './apod.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApodService } from '../services/apod.service';
import { ApodRoutingModule } from './apod-routing.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ApodRoutingModule
    ],
    exports: [],
    declarations: [
        ApodComponent,
        PhotoDetailComponent,
        SpinnerComponent
    ],
    providers:[ApodService]
})
export class ApodModule { }