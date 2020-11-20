import {AfterViewInit, Component, Input} from '@angular/core';
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
  xml;
  @Input() xmlText;

  constructor() {}

  ngAfterViewInit(): void {
    this.overwriteXML();
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
    let gpxHTml;
    gpxHTml = new L.GPX(this.xml, {
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
  private overwriteXML(): void{
    this.xml = 'data:application/xml;charset=UTF-8,' + encodeURIComponent(this.xmlText);
  }
}
