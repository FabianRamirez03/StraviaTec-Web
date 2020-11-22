import {AfterViewChecked, AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {MessengerService} from '../../../MessengerService';
import * as L from 'leaflet';

@Component({
  selector: 'app-mis-carreras',
  templateUrl: './mis-carreras.component.html',
  styleUrls: ['./mis-carreras.component.scss']
})
export class MisCarrerasComponent implements AfterViewChecked {
  misCarreras: any;
  atleta: any;
  flag = true;
  constructor(public httpService: HttpClient, @Inject(MessengerService) public recibido: MessengerService['usuario'],
              private messengerService: MessengerService) {
    this.atleta = recibido.usuario;
    this.httpService.post('http://localhost/APIStraviaTec/Carrera/carrerasPorUsuario', { Idusuario: this.atleta.idusuario}).subscribe(
      (resp: HttpResponse<any>) => { this.misCarreras = resp; console.log(resp); });
  }
  mapa(): void{
    let i = 0;
    for (const atleta in this.misCarreras){
      const map = L.map('map' + i);
      const tiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Powered by Straviatec',
        maxZoom: 17
      });
      tiles.addTo(map);
      // tslint:disable-next-line:prefer-const
      let gpxHTml;
      gpxHTml = new L.GPX(this.misCarreras[i].recorrido, {
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
  ngAfterViewChecked(): void {
    if (this.flag) {
      try {
        this.mapa();
      } catch (Exception) {
        this.flag = false;
      }
    }
  }

  tablaPosiciones(carrera: any): void{
    this.messengerService.setMessage(carrera);
}

}
