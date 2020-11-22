import {Component, Inject, OnInit} from '@angular/core';
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
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.atleta = recibido.usuario;
    this.httpService.post('http://localhost/APIStraviaTec/Carrera/carrerasDisponbles', { categoria: this.atleta.categoria}).subscribe(
      (resp: HttpResponse<any>) => { this.eventos = resp; console.log(resp); });
  }
  carreras(carrera: void): void{
    this.messengerService.setMessage(carrera);
  }
  ngOnInit(): void {
  }

}
