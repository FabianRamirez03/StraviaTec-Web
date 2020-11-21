import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.scss']
})
export class CarrerasComponent implements OnInit {
  eventos: any;
  atleta: any;
  mensaje: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.atleta = value; });
    this.httpService.post('http://localhost/APIStraviaTec/Carrera/carrerasDisponbles', { categoria: this.atleta.categoria}).subscribe(
      (resp: HttpResponse<any>) => { this.eventos = resp; console.log(resp); });
  }
  carreras(carrera: void): void{
    this.mensaje = [this.atleta, carrera];
    this.messengerService.setMessage(this.mensaje);
  }
  ngOnInit(): void {
  }

}
