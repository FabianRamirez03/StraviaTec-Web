import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unirse-grupo',
  templateUrl: './unirse-grupo.component.html',
  styleUrls: ['./unirse-grupo.component.scss']
})
export class UnirseGrupoComponent implements OnInit {

  grupos = [
    {
      nombre: 'Caminantes de Santa Barbara',
      admin: 'Mariana',
      imageURL: 'https://source.unsplash.com/1600x900/?hiking,sports',
    },
    {
      nombre: 'Nadadores de Moncho',
      admin: 'Wajib',
      imageURL: 'https://source.unsplash.com/1600x900/?swimming,sports',
    },
    {
      nombre: 'Ciclistas de Moncho',
      admin: 'Mario',
      imageURL: 'https://source.unsplash.com/1600x900/?cycling,sports',
    },
    {
      nombre: 'Mejengueros de Mercedes',
      admin: 'Fabian',
      imageURL: 'https://source.unsplash.com/1600x900/?soccer,sports',
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
