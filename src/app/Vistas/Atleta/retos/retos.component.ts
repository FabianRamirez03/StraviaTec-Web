import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-retos',
  templateUrl: './retos.component.html',
  styleUrls: ['./retos.component.scss']
})
export class RetosComponent implements OnInit {
  eventos: any;
  atleta: any;
  mensaje: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.atleta = value; });
    this.httpService.post('http://localhost/APIStraviaTec/Retos/retosDisponibles', { primernombre: this.atleta.idusuario}).subscribe(
      (resp: HttpResponse<any>) => { this.eventos = resp; console.log(resp); });
  }

  ngOnInit(): void {
  }
  suscribirse(reto: any): void{
    this.httpService.post('http://localhost/APIStraviaTec/Retos/addUser',
      { Iddeportista: this.atleta.idusuario, Idreto: reto.Idreto}).subscribe(
      (resp: HttpResponse<any>) => { this.mensaje = resp; console.log(resp); });
  }
  retos(): void{}

}
