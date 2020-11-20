import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.scss']
})
export class ProgresoComponent implements OnInit {
  retos: any;
  atleta: any;
  eventos: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.atleta = value; });
    this.httpService.post('http://localhost/APIStraviaTec/Retos/retosDisponibles', { primernombre: this.atleta.idusuario}).subscribe(
      (resp: HttpResponse<any>) => { this.retos = resp; console.log(resp); });
  }
  misRetos(): void{}
  ngOnInit(): void {
  }


}
