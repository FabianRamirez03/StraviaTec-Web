import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.scss']
})
export class ProgresoComponent implements OnInit {
  retos: any;
  constructor() {
    this.retos = ['Mariana', 'Julio', 'Julio', 'Julio', 'Julio', 'Julio', 'Julio'];
  }

  ngOnInit(): void {
  }


}
