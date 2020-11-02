import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.scss']
})


export class ActivityPageComponent implements OnInit {
  actividades = [
    {
      tipo: 'Ciclismo de montaña',
      esfuerzo: 'Intermedio',
      nombre: 'Viaje por Chepe',
      fecha: '11/1/20',
      hora: '4:20 pm',
    },
    {
      tipo: 'Senderismo',
      esfuerzo: 'Liviano',
      nombre: 'Por el monte',
      fecha: '6/2/18',
      hora: '9:10 am',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
