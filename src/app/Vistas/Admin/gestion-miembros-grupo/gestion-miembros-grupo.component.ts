import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-gestion-miembros-grupo',
  templateUrl: './gestion-miembros-grupo.component.html',
  styleUrls: ['./gestion-miembros-grupo.component.scss']
})
export class GestionMiembrosGrupoComponent implements OnInit {
  deportistas: any;
  admin: any;
  grupo: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.grupo = value[0];
                                                      this.admin = value[0]; });
    this.httpService.post('http://localhost/APIStraviaTec/Grupo/usersInGroup', { Idgrupo: this.grupo.Idgrupo}).subscribe(
      (resp: HttpResponse<any>) => { this.deportistas = resp; console.log(resp); });
  }
  ngOnInit(): void {
  }
  borrarDeportista(deportista: any): void{
    this.httpService.post('http://localhost/APIStraviaTec/Grupo/deleteUser',
      { Idusuario: deportista.Idusuario, Idgrupo: this.grupo.Idgrupo}).subscribe(
      (resp: HttpResponse<any>) => { const ans = resp; console.log(resp); });
  }
  volver(): void{
    this.messengerService.setMessage(this.admin);
  }

}
