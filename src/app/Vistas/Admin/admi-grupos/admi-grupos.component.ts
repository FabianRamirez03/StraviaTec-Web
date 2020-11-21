import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';


@Component({
  selector: 'app-admi-grupos',
  templateUrl: './admi-grupos.component.html',
  styleUrls: ['./admi-grupos.component.scss']
})
export class AdmiGruposComponent implements OnInit {
  grupos: any;
  admin: any;
  name: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.name = value; });
    this.httpService.post('http://localhost/APIStraviaTec/Usuario/porNombreUsuario', { Idusuario: this.admin.Idusuario}).subscribe(
      (resp: HttpResponse<any>) => { this.admin = resp; console.log(resp); });
  }

  ngOnInit(): void {
  }

  GestionClick(grupo: any): void {
    this.messengerService.setMessage([grupo, this.admin]);
  }
  // GestionClick(): void{
  //   this.httpService.post('http://localhost/APIStraviaTec/Usuario/buscarUsuario', { primernombre: this.search}).subscribe(
  //     (resp: HttpResponse<any>) => { this.atletas = resp; console.log(resp); });
  // }

  ActualizarClick(grupo: any): void{
    this.messengerService.setMessage([grupo, this.admin]);
  }

  DeleteClick(grupo: any): void{
    this.httpService.post('http://localhost/APIStraviaTec/Grupo/deleteGroup', { Idgrupo: grupo.Idgrupo}).subscribe(
      (resp: HttpResponse<any>) => { this.grupos = resp; console.log(resp); });
  }

}
