import { Component, AfterViewInit} from '@angular/core';
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

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const map = L.map('map');
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>'
    }).addTo(map);
    this.map = map;
    const tiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 15,
      attribution: 'Powered by Leaflet Extras'
    });
    tiles.addTo(this.map);
    // tslint:disable-next-line:prefer-const
    let url = '../../../../assets/gpx/file.gpx'; // URL to your GPX file or the GPX itself
    let gpxHTml;
    gpxHTml = new L.GPX(url, {async: true}).on('loaded', e => {
      map.fitBounds(e.target.getBounds());
    });
    gpxHTml.addTo(this.map);
  }

}
