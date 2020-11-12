import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admiretos',
  templateUrl: './admiretos.component.html',
  styleUrls: ['./admiretos.component.scss']
})
export class AdmiretosComponent implements OnInit {
  retos: any;
  constructor() {
    this.retos = ['Mariana', 'Julio', 'Mariana', 'Julio', 'Mariana', 'Julio'];
  }

  ngOnInit(): void {
  }

}
