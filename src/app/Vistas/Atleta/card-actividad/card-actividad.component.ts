import {Component, Input, OnInit} from '@angular/core';
import * as L from 'leaflet';

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
    // this.initMap();
  }
  private overwriteXML(): void{
    this.xml = 'data:application/xml;charset=UTF-8,' + encodeURIComponent(this.xmlText);
  }

}
