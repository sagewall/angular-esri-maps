import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EsriLoaderService } from 'angular2-esri-loader';
import MapView = __esri.MapView;

@Component({
  selector: 'app-esri-web-map',
  templateUrl: './esri-web-map.component.html',
  styleUrls: ['./esri-web-map.component.css']
})
export class EsriWebMapComponent implements OnInit {

  mapView: __esri.MapView;
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  constructor(private esriLoader: EsriLoaderService) { }

  ngOnInit() {
    return this.esriLoader.load({
      url: '//js.arcgis.com/4.3/'
    })
      .then(() => {
        this.esriLoader.loadModules([
          'esri/WebMap',
          'esri/views/MapView'
        ])
          .then(([
                   WebMap,
                   MapView
                 ]: [
            __esri.WebMapConstructor,
            __esri.MapViewConstructor
            ]) => {
            const webMapProperties: __esri.WebMapProperties = {
              portalItem: {
                id: 'c80397f52b0c48ab86c9768d08e8be69'
              }
            };

            const webmap = new WebMap(webMapProperties);

            const mapViewProperties: __esri.MapViewProperties = {
              map: webmap,
              container: this.mapViewEl.nativeElement,
              center: [-105.22, 39.75],
              zoom: 14
            };

            this.mapView = new MapView(mapViewProperties);
          });
      });
  }

}
