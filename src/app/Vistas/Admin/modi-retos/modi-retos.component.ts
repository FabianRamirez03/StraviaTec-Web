import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-modi-retos',
  templateUrl: './modi-retos.component.html',
  styleUrls: ['./modi-retos.component.scss']
})
export class ModiRetosComponent implements OnInit {
  reto: any;
  modify: boolean;
  admin: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.admin = recibido.usuario;
    this.messengerService.message.subscribe(value => {this.reto = value; });
  }
  modificar(): void{
    const reto = {
      Idreto: this.reto.Idreto,
      Idorganizador: this.admin.idusuario,
      Nombrereto: (document.getElementById('name') as HTMLInputElement).value,
      Objetivoreto: (document.getElementById('cuenta') as HTMLInputElement).value,
      Fechainicio: (document.getElementById('inicioDate') as HTMLInputElement).value,
      Fechafinaliza: (document.getElementById('finaldate') as HTMLInputElement).value,
      Tipoactividad: (document.getElementById('tipo') as HTMLInputElement).value,
      Tiporeto: (document.getElementById('Reto') as HTMLInputElement).value,
      Privada: (document.getElementById('privacidad') as HTMLInputElement).value
    };
    this.httpService.post('http://localhost/APIStraviaTec/Retos/updateReto',
      reto).subscribe(
      (resp: HttpResponse<any>) => { this.reto = resp; console.log(resp); });
  }
  ngOnInit(): void {
  }

}
