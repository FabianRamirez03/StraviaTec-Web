import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admi-grupos',
  templateUrl: './admi-grupos.component.html',
  styleUrls: ['./admi-grupos.component.scss']
})
export class AdmiGruposComponent implements OnInit {
  grupos: any;
  constructor(private router: Router) {
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

  GestionClick(): void{
    console.log('click en suscribirse');
  }

  ActualizarClick(): void{
    console.log('click en Actualizar');
  }

  DeleteClick(): void{
    console.log('click en Eliminar');
  }

}
