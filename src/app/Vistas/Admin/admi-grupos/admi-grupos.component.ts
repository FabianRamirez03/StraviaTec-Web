import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admi-grupos',
  templateUrl: './admi-grupos.component.html',
  styleUrls: ['./admi-grupos.component.scss']
})
export class AdmiGruposComponent implements OnInit {
  grupos: any;
  constructor() {
    this.grupos = ['Moncho Bikers', 'Ruedas de Heredia', 'Cartago le pone'];
  }

  ngOnInit(): void {
  }

  suscribirseClick(): void{
    console.log('click en suscribirse');
  }

}
