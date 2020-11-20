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
  atleta: any;
  constructor(public httpService: HttpClient, private router: Router,
              public dialog: MatDialog, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.atleta = value; });
    this.httpService.post('http://localhost/APIStraviaTec/Carrera/carrerasPorUsuario',
      { Idusuario: this.atleta.Idusuario}).subscribe(
      (resp: HttpResponse<any>) => { this.carreras = resp; console.log(resp); });
  }
  modificarCarreras(carrera: any): void{
    this.messengerService.setMessage(carrera);
  }
  nuevaCarreras(): void{
    const nuevo = {
      Idorganizador: 'id organizador',
      Nombrecarrera: 'nombre carrera',
      Fechacarrera: 'fecha carrera',
      Tipoactividad: 'tipo de actividad',
      Recorrido: 'recorrido',
      Privada: 'privada',
      Costo: 'costo',
      Cuentabancaria: 'cuenta bancaria' };
    this.messengerService.setMessage(nuevo);
  }
  eliminarCarrera(carrera: any): void{

    this.httpService.post('http://localhost/APIStraviaTec/Carrera/delete',
      { Idcarrera: carrera.Idcarrera}).subscribe(
      (resp: HttpResponse<any>) => { this.carreras = resp; console.log(resp); });
  }

  ngOnInit(): void {
  }
}
