import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { ModiCarreraComponent } from '../modi-carrera/modi-carrera.component';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-admicarreras',
  templateUrl: './admicarreras.component.html',
  styleUrls: ['./admicarreras.component.scss']
})
export class AdmicarrerasComponent implements OnInit {
  carreras: any;
  admin: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.admin = recibido.usuario;
    this.httpService.post('http://localhost/APIStraviaTec/Carrera/carrerasPorUsuario',
      { idusuario: this.admin.idusuario}).subscribe(
      (resp: HttpResponse<any>) => { this.carreras = resp; console.log(resp); });
  }
  modificarCarreras(carrera: any): void{
    this.messengerService.setMessage([carrera, this.admin]);
  }
  nuevaCarreras(): void{
    this.messengerService.setMessage(this.admin);
  }
  eliminarCarrera(carrera: any): void{

    this.httpService.post('http://localhost/APIStraviaTec/Carrera/delete',
      { idcarrera: carrera.idCarrera}).subscribe(
      (resp: HttpResponse<any>) => { this.carreras = resp; console.log(resp); });
  }
  suscritos(carrera: any): void{
    this.messengerService.setMessage(carrera);
  }

  ngOnInit(): void {
  }
}
