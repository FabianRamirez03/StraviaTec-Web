import {Component, Input, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {leafletImage} from 'leaflet-image';

@Component({
  selector: 'app-card-actividad',
  templateUrl: './card-actividad.component.html',
  styleUrls: ['./card-actividad.component.scss']
})
export class CardActividadComponent implements OnInit {

  @Input() atleta;
  @Input() xmlText;
  map;
  xml;
  constructor() { }

  ngOnInit(): void {
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
    leafletImage(map, (err, canvas) => {
      // now you have canvas
      // example thing to do with that canvas:
      const img = document.createElement('img');
      const dimensions = map.getSize();
      img.width = dimensions.x;
      img.height = dimensions.y;
      img.src = canvas.toDataURL();
      document.getElementById('mapImage').innerHTML = '';
      document.getElementById('mapImage').appendChild(img);
    });

  }
  private overwriteXML(): void{
    this.xml = 'data:application/xml;charset=UTF-8,' + encodeURIComponent(this.xmlText);
  }

}
