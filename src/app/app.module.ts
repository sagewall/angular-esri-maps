import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { EsriMapComponent } from './esri-map/esri-map.component';

import { EsriLoaderService } from 'angular2-esri-loader';
import { EsriSceneComponent } from './esri-scene/esri-scene.component';
import { HomeComponent } from './home/home.component';
import { EsriWebMapComponent } from './esri-web-map/esri-web-map.component';

@NgModule({
  declarations: [
    AppComponent,
    EsriMapComponent,
    EsriSceneComponent,
    HomeComponent,
    EsriWebMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    EsriLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
