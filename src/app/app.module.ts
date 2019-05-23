import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { NasaSettings } from './config/nasa.settings';
import { ApodModule } from './apod/apod.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsteroidsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ApodModule,
    AppRoutingModule
  ],
  providers: [NasaSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
