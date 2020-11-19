import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-miembros-grupo',
  templateUrl: './gestion-miembros-grupo.component.html',
  styleUrls: ['./gestion-miembros-grupo.component.scss']
})
export class GestionMiembrosGrupoComponent implements OnInit {
  deportistas: any;
  constructor() {
    this.deportistas = [
      {nombre: 'Paco Flores',
        idDeportista : '1'},
      {nombre: 'Michael Jackson',
        idDeportista: '2'},
      {nombre: 'Adriana Rojas',
        idDeportista: '3'}];
  }
  ngOnInit(): void {
  }
  borrarDeportista(): void{
    console.log('click en Eliminar');
  }

}
