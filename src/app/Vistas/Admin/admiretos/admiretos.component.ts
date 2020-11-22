import { Component, OnInit } from '@angular/core';
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
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.admin = value; });
    this.httpService.post('http://localhost/APIStraviaTec/Retos/retosPorUsuario',
      { idusuario: this.admin.idusuario}).subscribe(
      (resp: HttpResponse<any>) => { this.retos = resp; console.log(resp); });
  }


  modificar(reto: any): void{
    this.messengerService.setMessage([reto, this.admin]);
  }
  eliminar(reto: any): void{
    this.httpService.post('http://localhost/APIStraviaTec/Retos/deleteReto',
      { Idreto: reto.idReto}).subscribe(
      (resp: HttpResponse<any>) => { reto = resp; console.log(resp); });
  }
  crear(): void{
    this.messengerService.setMessage(this.admin);
  }
  ngOnInit(): void {
  }

}
