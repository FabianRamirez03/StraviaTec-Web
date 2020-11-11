import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admicarreras',
  templateUrl: './admicarreras.component.html',
  styleUrls: ['./admicarreras.component.scss']
})
export class AdmicarrerasComponent implements OnInit {
  atletas: any;
  constructor() {
    this.atletas = ['Mariana', 'Julio', 'Mariana', 'Julio', 'Mariana', 'Julio'];
  }

  ngOnInit(): void {
  }

}
