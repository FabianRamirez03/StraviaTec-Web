import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admicarreras',
  templateUrl: './admicarreras.component.html',
  styleUrls: ['./admicarreras.component.scss']
})
export class AdmicarrerasComponent implements OnInit {
  retos: any;
  constructor(public httpService: HttpClient, private router: Router) {
    this.retos = ['Mariana', 'Julio', 'Mariana', 'Julio', 'Mariana', 'Julio'];
  }
  misCarreras(): void{}

  ngOnInit(): void {
  }

}
