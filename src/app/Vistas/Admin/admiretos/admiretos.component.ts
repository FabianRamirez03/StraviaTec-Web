import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModiRetosComponent} from '../modi-retos/modi-retos.component';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-admiretos',
  templateUrl: './admiretos.component.html',
  styleUrls: ['./admiretos.component.scss']
})
export class AdmiretosComponent implements OnInit {
  retos: any;
  admin: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.admin = recibido.usuario;
    this.httpService.post('http://localhost/APIStraviaTec/Retos/retosPorUsuario',
      { Idusuario: this.admin.idusuario}).subscribe(
      (resp: HttpResponse<any>) => { this.retos = resp; console.log(resp); });
  }


  modificar(reto: any): void{
    this.messengerService.setMessage(reto);
  }
  eliminar(reto: any): void{
    this.httpService.post('http://localhost/APIStraviaTec/Retos/deleteReto',
      { Idreto: reto.idReto}).subscribe(
      (resp: HttpResponse<any>) => { reto = resp; console.log(resp); });
  }
  ngOnInit(): void {
  }

}
