import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-unirse-grupo',
  templateUrl: './unirse-grupo.component.html',
  styleUrls: ['./unirse-grupo.component.scss']
})
export class UnirseGrupoComponent implements OnInit {
  grupos: any;
  atleta: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.atleta = value; });
    this.httpService.post('http://localhost/APIStraviaTec/Usuario/Groups', { idusuario: this.atleta.idusuario}).subscribe(
      (resp: HttpResponse<any>) => { this.grupos = resp; console.log(resp); });
  }
  gruposExist(): void{}
  unirse(): void{}
  ngOnInit(): void {
  }

}
