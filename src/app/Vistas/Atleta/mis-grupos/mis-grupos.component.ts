import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mis-grupos',
  templateUrl: './mis-grupos.component.html',
  styleUrls: ['./mis-grupos.component.scss']
})
export class MisGruposComponent implements OnInit {

  grupos = [
    {
      nombre: 'Caminantes de Santa Barbara',
      admin: 'Mariana',
      imageURL: 'https://source.unsplash.com/1600x900/?hiking,sports',
    },
    {
      nombre: 'Mejengueros de Mercedes',
      admin: 'Fabian',
      imageURL: 'https://source.unsplash.com/1600x900/?soccer,sports',
    }
  ];
  constructor(public httpService: HttpClient, private router: Router) { }
  misGrupos(): void{}
  ngOnInit(): void {}

}
