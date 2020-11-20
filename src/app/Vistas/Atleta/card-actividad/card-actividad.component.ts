import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-actividad',
  templateUrl: './card-actividad.component.html',
  styleUrls: ['./card-actividad.component.scss']
})
export class CardActividadComponent implements OnInit {

  @Input() atleta;
  constructor() { }

  ngOnInit(): void {
  }

}
