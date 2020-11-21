import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-mis-carreras',
  templateUrl: './mis-carreras.component.html',
  styleUrls: ['./mis-carreras.component.scss']
})
export class MisCarrerasComponent implements OnInit {
  misCarreras: any;
  constructor(public httpService: HttpClient) {
    this.misCarreras = [
      { idCarrera: '1',
        nombreCarrera: 'Palmarin',
        fecha : '15-12-2020',
        tipoActividad: 'Ciclismo',
        costo: '20000',
        cuenta: 'CR-574231825',
        mapa: 'https://www.wareable.com/media/imager/201708/25111-posts.facebook_lg.jpg'
      },
      { idCarrera: '2',
        nombreCarrera: 'Ironman jaco',
        fecha : '20-12-2020',
        tipoActividad: 'Caminata',
        costo: '15000',
        cuenta: 'CR-5778831825',
        mapa: 'https://beta.ctvnews.ca/content/dam/ctvnews/images/2019/12/10/1_4724422.jpg'
      },
      { idCarrera: '3',
        nombreCarrera: 'Vuelta al Arenal',
        fecha : '10-10-2020',
        tipoActividad: 'Kayak',
        costo: '8000',
        cuenta: 'CR-574231825',
        mapa: 'https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2014/08/Strava-Turkey.jpg'
      }
    ];
  }

  ngOnInit(): void {
  }

  tablaPosiciones(idCarrera: number): void{
  console.log('Ver tabla de la carrera ' + idCarrera);
}

}
