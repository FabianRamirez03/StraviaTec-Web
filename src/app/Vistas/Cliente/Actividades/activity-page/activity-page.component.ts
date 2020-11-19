import { Component, OnInit } from '@angular/core';
import {StateServiceService } from '../../../../Services/state-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.scss']
})


export class ActivityPageComponent implements OnInit {
  actividades = [
    {
      tipo: 'Caminata',
      esfuerzo: 'Intermedio',
      nombre: 'Viaje por Chepe',
      fecha: '11/1/20',
      hora: '4:20 pm',
      gpx: '../../../assets/gpx/file.gpx',
    },
    {
      tipo: 'Ciclismo',
      esfuerzo: 'Liviano',
      nombre: 'Por el monte',
      fecha: '6/2/18',
      hora: '9:10 am',
      gpx: '../../../assets/gpx/xml/test.xml',
    },
    {
      tipo: 'Senderismo',
      esfuerzo: 'Liviano',
      nombre: 'Cerro chirripo',
      fecha: '9/11/20',
      hora: '7:47 am',
      gpx: '../../../assets/gpx/xml/test.xml',
    },
    {
      tipo: 'Kayak',
      esfuerzo: 'Liviano',
      nombre: 'Mercedes Norte',
      fecha: '4/20/20',
      hora: '4:20 pm',
      gpx: '../../../assets/gpx/xml/test.xml',
    },
    {
      tipo: 'Nadar',
      esfuerzo: 'Liviano',
      nombre: 'San Ramón',
      fecha: '19/11/15',
      hora: '8:50 pm',
      gpx: '../../../assets/gpx/xml/test.xml',
    }
  ];

  constructor(private stateService: StateServiceService, private router: Router) { }
  goToCategoryInfo(category): void {
    this.stateService.actividad = category;
    this.router.navigate(['/activityInfo']);
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  clickMethod(name: string) {
    if (confirm('Are you sure to delete ' + name)) {
      console.log('Implement delete functionality here');
    }
  }
}
