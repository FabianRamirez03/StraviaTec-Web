import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-retos',
  templateUrl: './retos.component.html',
  styleUrls: ['./retos.component.scss']
})
export class RetosComponent implements OnInit {
  eventos: any;
  constructor(public httpService: HttpClient, private router: Router) {
    this.eventos = ['Mariana', 'Julio', 'Julio']; }

  ngOnInit(): void {
  }
  suscribirse(): void{}
  retos(): void{}

}
