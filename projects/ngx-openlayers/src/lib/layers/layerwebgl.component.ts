import { Component, OnInit } from '@angular/core';
import TileLayer from 'ol/layer/WebGLTile';
import { LayerComponent } from './layer.component';
import { GeoTIFF } from 'ol/source';

@Component({
  selector: 'aol-layer-webgl',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class LayerWebGlComponent extends LayerComponent implements OnInit {
  source: GeoTIFF;

  ngOnInit(): void {
    this.instance = new TileLayer(this);
    super.ngOnInit();
  }
}
