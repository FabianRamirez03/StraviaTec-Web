import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  atletas: any;

  constructor(public httpService: HttpClient, private router: Router) {
    this.atletas = ['Mariana', 'Julio'];
  }
  datosUsuario(): void{
  }
  amigosActividades(): void{
  }
  publicarActividad(): void{
  }
  ngOnInit(): void {
  }

}
