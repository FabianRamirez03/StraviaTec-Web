import {Component, Inject, OnInit} from '@angular/core';
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
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.atleta = recibido.usuario;
    this.httpService.post('http://localhost/APIStraviaTec/Usuario/Groups', { idusuario: this.atleta.idusuario}).subscribe(
      (resp: HttpResponse<any>) => { this.grupos = resp; console.log(resp); });
  }
  enviarGrupo(grupo: any): void{
    this.messengerService.setMessage(grupo);
  }

  ngOnInit(): void {}

}
