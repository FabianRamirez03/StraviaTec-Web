import { Component, OnInit } from '@angular/core';
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
  administrador: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.administrador = value[1]; });
    console.log(this.administrador);
    this.httpService.post('http://localhost/APIStraviaTec/Carrera/carrerasPorUsuario',
      { idusuario: this.administrador.idusuario}).subscribe(
      (resp: HttpResponse<any>) => { this.carreras = resp; console.log(resp); });
  }
  modificarCarreras(carrera: any): void{
    this.messengerService.setMessage([carrera, this.administrador]);
  }
  nuevaCarreras(): void{
    this.messengerService.setMessage(this.administrador);
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
