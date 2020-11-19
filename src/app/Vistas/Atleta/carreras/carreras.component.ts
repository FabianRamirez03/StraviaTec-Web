import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.scss']
})
export class CarrerasComponent implements OnInit {
  eventos: any;
  constructor(public httpService: HttpClient, private router: Router) {
    this.eventos = ['Mariana', 'Julio', 'Julio'];
  }
  carreras(): void{}
  suscribirse(): void{}
  ngOnInit(): void {
  }

}
