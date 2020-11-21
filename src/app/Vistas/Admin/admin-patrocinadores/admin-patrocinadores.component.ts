import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-admin-patrocinadores',
  templateUrl: './admin-patrocinadores.component.html',
  styleUrls: ['./admin-patrocinadores.component.scss']
})
export class AdminPatrocinadoresComponent implements OnInit {
  patrocinadores: any;
  admin: any;
  carrera: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.admin = value; });
    this.httpService.post('http://localhost/APIStraviaTec/Carrera/participantesCarrera',
      { Idcarrera: this.carrera.Idcarrera}).subscribe(
      (resp: HttpResponse<any>) => { this.patrocinadores = resp; console.log(resp); });
  }

  ngOnInit(): void {
  }

}
