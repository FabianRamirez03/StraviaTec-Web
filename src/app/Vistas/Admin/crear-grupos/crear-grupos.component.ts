import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-grupos',
  templateUrl: './crear-grupos.component.html',
  styleUrls: ['./crear-grupos.component.scss']
})
export class CrearGruposComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  crearGrupo(): void{
    console.log('crear grupo click');
  }
  cancelar(): void{
    console.log('cancelar click');
  }

}
