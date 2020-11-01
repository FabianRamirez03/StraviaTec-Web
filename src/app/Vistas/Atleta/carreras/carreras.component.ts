import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.scss']
})
export class CarrerasComponent implements OnInit {
  atletas: any;
  constructor() {
    this.atletas = ['Mariana', 'Julio'];
  }

  ngOnInit(): void {
  }

}
