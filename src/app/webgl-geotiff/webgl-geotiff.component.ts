import { Component } from '@angular/core';
import {
  CoordinateComponent,
  DefaultInteractionComponent,
  MapComponent,
  ViewComponent,
  LayerWebGlComponent,
  SourceGeoTIFFComponent,
} from 'ngx-openlayers';

@Component({
  selector: 'app-root',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-view [zoom]="10"><aol-coordinate [x]="33.514" [y]="16.685" srid="EPSG:4326"></aol-coordinate> </aol-view>
      <aol-layer-webgl>
        <aol-source-geotiff
          [sources]="[
            {
              url: 'https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif',
            },
          ]"
        >
          <!--(imageLoadStart)="imageLoadStart()"
          (imageLoadEnd)="imageLoadEnd()"-->
        </aol-source-geotiff>
      </aol-layer-webgl>
    </aol-map>
  `,
  styles: [
    `
      map {
        background: #e0eced;
      }
    `,
  ],
  imports: [
    MapComponent,
    DefaultInteractionComponent,
    ViewComponent,
    CoordinateComponent,
    LayerWebGlComponent,
    SourceGeoTIFFComponent,
  ],
})
export class WebGlGeoTiffComponent {
  imageLoadStart(): void {
    console.log('image starts loading at: ' + new Date());
  }

  imageLoadEnd(): void {
    console.log('image ends loading at: ' + new Date());
  }
}
