import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {EsriLoaderService} from 'angular2-esri-loader';
import MapView = __esri.MapView;

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {

  mapView: __esri.MapView;
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  constructor(private esriLoader: EsriLoaderService) {
  }

  ngOnInit() {
    return this.esriLoader.load({
      url: '//js.arcgis.com/4.3/'
    })
      .then(() => {
        this.esriLoader.loadModules([
          'esri/Map',
          'esri/views/MapView'
        ])
          .then(([
                   Map,
                   MapView
                 ]: [
            __esri.MapConstructor,
            __esri.MapViewConstructor
            ]) => {
            const mapProperties: __esri.MapProperties = {
              basemap: 'topo'
            };

            const map = new Map(mapProperties);

            const mapViewProperties: __esri.MapViewProperties = {
              container: this.mapViewEl.nativeElement,
              center: [-105.22, 39.75],
              zoom: 14,
              map
            };

            this.mapView = new MapView(mapViewProperties);
          });
      });
  }

}
