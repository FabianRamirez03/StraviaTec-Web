import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-participantes-carrera',
  templateUrl: './participantes-carrera.component.html',
  styleUrls: ['./participantes-carrera.component.scss']
})
export class ParticipantesCarreraComponent implements OnInit {
  carrera: any;
  admin: any;
  participantes: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.carrera = value[0]; this.admin = value[1]; });
    this.httpService.post('http://localhost/APIStraviaTec/Carrera/participantesCarrera',
      { idcarrera: this.carrera.idCarrera}).subscribe(
      (resp: HttpResponse<any>) => { this.participantes = resp; console.log(resp); });
  }
  volver(): void{
    this.messengerService.setMessage(this.admin);
  }

  ngOnInit(): void {
  }

}
