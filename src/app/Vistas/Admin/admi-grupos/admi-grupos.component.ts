import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-admi-grupos',
  templateUrl: './admi-grupos.component.html',
  styleUrls: ['./admi-grupos.component.scss']
})
export class AdmiGruposComponent implements OnInit {
  grupos: any;
  constructor(public httpService: HttpClient) {
    this.grupos = [
      {nombre: 'Moncho Bikers',
        idgrupo : '1'},
      {nombre: 'Ruedas de Heredia',
        idgrupo: '2'},
      {nombre: 'Cartago le pone',
      idgrupo: '3'}];
  }

  ngOnInit(): void {
  }

  GestionClick(): void {
    console.log('Click en gestion');
  }
  // GestionClick(): void{
  //   this.httpService.post('http://localhost/APIStraviaTec/Usuario/buscarUsuario', { primernombre: this.search}).subscribe(
  //     (resp: HttpResponse<any>) => { this.atletas = resp; console.log(resp); });
  // }

  ActualizarClick(): void{
    console.log('click en Actualizar');
  }

  DeleteClick(): void{
    console.log('click en Eliminar');
  }

}
