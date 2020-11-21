import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-add-activty',
  templateUrl: './add-activty.component.html',
  styleUrls: ['./add-activty.component.scss']
})
export class AddActivtyComponent implements OnInit {
  tipo: string;
  recorrido: string;
  kilometraje: string;
  duracion: string;
  altura: string;
  idDeportista: string;
  nombre: string;

  constructor(public httpService: HttpClient, private router: Router) { }

  nuevaActividad(): void{
    this.tipo = (document.getElementById('activityType') as HTMLInputElement).value;
    this.nombre = (document.getElementById('fullName') as HTMLInputElement).value;
    // ya recorrido, kilometraje y duracion se sacan cada vez que sube un gpx
    this.httpService.post('http://localhost/APIStraviaTec/?',
      {
        iddeportista: this.idDeportista,
        kilometraje: this.kilometraje,
        altura: this.altura,
        recorrido: this.recorrido,
        duracion: this.duracion
      }).subscribe(); // Holi, no le puse nada porque no se que hacer en el suscribe :c
  }

  async nuevoRecorrido(): Promise<void>{
    this.recorrido = await this.setRecorrido();
    this.setMetaData();
  }
  async setRecorrido(): Promise<string> {
    const fileInput = (document.getElementById('file') as HTMLInputElement);
    const files = fileInput.files[0].text();
    const result = files.then((value) => {
      return 'data:application/xml;charset=UTF-8,' + value;
    });
    return await result;
  }

  setMetaData(): void{
    let duracion;
    duracion = new L.GPX(this.recorrido, {
      async: true,
    }).on('loaded', e => {
      this.duracion = this.convertMS(e.target.get_total_time());
      this.kilometraje = (e.target.get_distance() / 1000).toFixed(2) ;
      this.altura = e.target.get_elevation_gain().toFixed(2);
    });
  }


  convertMS( milliseconds ): string {
    // tslint:disable-next-line:one-variable-per-declaration
    let day, hour, minute, seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    if (minute < 10) {
      minute = '0' + minute.toString();
    }
    if (seconds < 10) {
      seconds = '0' + seconds.toString();
    }
    return hour.toString() + ':' + minute.toString() + ':' + seconds.toString();
  }
  ngOnInit(): void {
  }

}
