import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {EsriLoaderService} from 'angular2-esri-loader';
import SceneView = __esri.SceneView;

@Component({
  selector: 'app-esri-scene',
  templateUrl: './esri-scene.component.html',
  styleUrls: ['./esri-scene.component.css']
})
export class EsriSceneComponent implements OnInit {

  sceneView: __esri.SceneView;
  @ViewChild('sceneViewNode') private sceneViewEl: ElementRef;

  constructor(private esriLoader: EsriLoaderService) {
  }

  ngOnInit() {
    return this.esriLoader.load({
      url: '//js.arcgis.com/4.3/'
    })
      .then(() => {
        this.esriLoader.loadModules([
          'esri/Map',
          'esri/views/SceneView'
        ])
          .then(([
                   Map,
                   SceneView
                 ]: [
            __esri.MapConstructor,
            __esri.SceneViewConstructor
            ]) => {
            const mapProperties: __esri.MapProperties = {
              basemap: 'satellite',
              ground: 'world-elevation'
            };


            const map = new Map(mapProperties);

            const sceneViewProperties: __esri.SceneViewProperties = {
              container: this.sceneViewEl.nativeElement,
              camera: {
                position: [
                  -105.12,
                  39.75,
                  3500
                ],
                tilt: 80,
                heading: 250
              },
              map
            };

            this.sceneView = new SceneView(sceneViewProperties);

          });
      });
  }
}
