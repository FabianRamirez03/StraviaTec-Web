import {Component, Inject, OnInit} from '@angular/core';
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
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService,
  @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.atleta = recibido.usuario;
    this.httpService.post('http://localhost/APIStraviaTec/Retos/retosDisponibles', { Idusuario: this.atleta.idusuario}).subscribe(
      (resp: HttpResponse<any>) => { this.eventos = resp; console.log(resp); });
  }

  ngOnInit(): void {
  }
  suscribirse(reto: any): void{
    this.httpService.post('http://localhost/APIStraviaTec/Retos/addUser',
      { Iddeportista: this.atleta.idusuario, Idreto: reto.idReto}).subscribe(
      (resp: HttpResponse<any>) => { this.mensaje = resp; console.log(resp); alert('Suscrito correctamente! :)')});
  }
  retos(): void{}

}
