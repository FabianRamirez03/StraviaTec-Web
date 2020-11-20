import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-mis-grupos',
  templateUrl: './mis-grupos.component.html',
  styleUrls: ['./mis-grupos.component.scss']
})
export class MisGruposComponent implements OnInit {
  atleta: any;
  grupos: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.atleta = value; });
    this.httpService.post('http://localhost/APIStraviaTec/Usuario/Groups', { idusuario: this.atleta.idusuario}).subscribe(
      (resp: HttpResponse<any>) => { this.grupos = resp; console.log(resp); });
  }
  misGrupos(): void{}
  ngOnInit(): void {}

}
