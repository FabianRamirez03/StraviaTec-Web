import {Component, Inject, OnInit} from '@angular/core';
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
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.admin = recibido.usuario;
    this.httpService.post('http://localhost/APIStraviaTec/Usuario/Groups',
        {idusuario: this.admin.idusuario}).subscribe((resp: HttpResponse<any>) => {this.grupos = resp;
                                                                                   console.log(this.grupos); });
  }

  ngOnInit(): void {
  }

  GestionClick(grupo: any): void {
    this.messengerService.setMessage(grupo);
  }
  // GestionClick(): void{
  //   this.httpService.post('http://localhost/APIStraviaTec/Usuario/buscarUsuario', { primernombre: this.search}).subscribe(
  //     (resp: HttpResponse<any>) => { this.atletas = resp; console.log(resp); });
  // }

  ActualizarClick(grupo: any): void{
    this.messengerService.setMessage(grupo);
  }

  DeleteClick(grupo: any): void{
    this.httpService.post('http://localhost/APIStraviaTec/Grupo/deleteGroup', { idgrupo: grupo.idgrupo}).subscribe(
      (resp: HttpResponse<any>) => { this.grupos = resp; console.log(resp); });
  }

}
