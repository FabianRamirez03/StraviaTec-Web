import {Component, Inject, OnInit} from '@angular/core';
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
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.atleta = recibido.usuario;
    this.httpService.post('http://localhost/APIStraviaTec/Usuario/Groups', { idusuario: this.atleta.idusuario}).subscribe(
      (resp: HttpResponse<any>) => { this.grupos = resp; console.log(resp); });
  }
  unirse(grupo: any): void{
    this.httpService.post('http://localhost/APIStraviaTec/Grupo/addUser',
      { idusuario: this.atleta.idusuario, idgrupo: grupo.idgrupo}).subscribe(
      (resp: HttpResponse<any>) => { this.grupos = resp; console.log(resp); });
    alert('Fuiste agregado al grupo');
  }
  ngOnInit(): void {
  }

}
