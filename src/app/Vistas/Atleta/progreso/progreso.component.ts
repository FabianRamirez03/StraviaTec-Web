import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.scss']
})
export class ProgresoComponent implements OnInit {
  retos: any;
  constructor(public httpService: HttpClient, private router: Router) {
    this.retos = ['Mariana', 'Julio', 'Julio', 'Julio', 'Julio', 'Julio', 'Julio'];
  }
  misRetos(): void{}
  ngOnInit(): void {
  }


}
