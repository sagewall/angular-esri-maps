import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EsriMapComponent } from '../esri-map/esri-map.component';
import { EsriSceneComponent } from '../esri-scene/esri-scene.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'esri-map', component: EsriMapComponent},
  {path: 'esri-scene', component: EsriSceneComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
