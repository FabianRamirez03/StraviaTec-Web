import {AfterViewChecked, Component, Inject, OnInit} from '@angular/core';
import {StateServiceService} from '../../../Services/state-service.service';
import * as L from 'leaflet';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-carreras-grupo',
  templateUrl: './carreras-grupo.component.html',
  styleUrls: ['./carreras-grupo.component.scss']
})
export class CarrerasGrupoComponent implements AfterViewChecked {
  Carreras: any;
  Atleta: any;
  Grupo: any;
  flag = true;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.Atleta = recibido.usuario;
    this.messengerService.message.subscribe(value => {this.Grupo = value; });
    this.httpService.post('http://localhost/APIStraviaTec/Grupo/carrerasInGroup',
      {Idgrupo: this.Grupo.Idgrupo}).subscribe((resp: HttpResponse <any>) => {this.Carreras = resp; });
  }

  ngAfterViewChecked(): void {
    if (this.flag) {
      try {
        this.mapa();
      } catch (Exception) {
        this.flag = false;
      }
    }
  }
  mapa(): void{
    let i = 0;
    for (const carrera in this.Carreras){
      const map = L.map('map' + i);
      const tiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Powered by Leaflet Extras',
        maxZoom: 17
      });
      tiles.addTo(map);
      // tslint:disable-next-line:prefer-const
      let gpxHTml;
      gpxHTml = new L.GPX(this.Carreras[i].mapa, {
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
      gpxHTml.addTo(map);
      i++;
    }
  }
}
