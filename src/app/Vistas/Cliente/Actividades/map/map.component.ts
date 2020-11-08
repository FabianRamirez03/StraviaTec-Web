import {Component, AfterViewInit, Input} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-gpx';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit  {
  private map;
  gpx;
  @Input() gpxURL;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const map = L.map('map');
    this.map = map;
    const tiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Powered by Leaflet Extras',
      maxZoom: 17
    });
    tiles.addTo(this.map);
    // tslint:disable-next-line:prefer-const
    let url = this.gpxURL; // URL to your GPX file or the GPX itself
    let gpxHTml;
    gpxHTml = new L.GPX(url, {
      async: true,
      polyline_options: {
        color: 'orange',
        opacity: 0.75,
        weight: 3,
        lineCap: 'round'
      }
    }).on('loaded', e => {
      map.fitBounds(e.target.getBounds());
    });
    gpxHTml.addTo(this.map);

  }

}
