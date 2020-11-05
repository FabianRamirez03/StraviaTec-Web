import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.scss']
})
export class CarrerasComponent implements OnInit {
  eventos: any;
  constructor() {
    this.eventos = ['Mariana', 'Julio', 'Julio'];
  }

  ngOnInit(): void {
  }

}
