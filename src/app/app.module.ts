import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { ApodComponent } from './apod/apod.component';
import { PhotoDetailComponent } from './apod/photo-detail/photo-detail.component';
import { NasaSettings } from './config/nasa.settings';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsteroidsComponent,
    ApodComponent,
    PhotoDetailComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [NasaSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
