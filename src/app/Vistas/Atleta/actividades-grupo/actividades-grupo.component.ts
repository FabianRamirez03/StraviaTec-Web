import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-actividades-grupo',
  templateUrl: './actividades-grupo.component.html',
  styleUrls: ['./actividades-grupo.component.scss']
})
export class ActividadesGrupoComponent implements OnInit {

  retosGrupo: any;
  carrerasGrupo: any;
  constructor(public httpService: HttpClient) {
    this.retosGrupo = [
      { idReto: '1',
        nombreReto: 'Subiendo el Puerto',
        tipoActividad : 'Ciclismo',
        tipoReto: 'Altura',
        fechaInicia: '20-11-2020 5:00:00',
        fechaFinaliza: '20-11-2020 10:00:00',
        objetivo: '3'
      },
      { idReto: '2',
        nombreReto: '100 vueltas en el plano',
        tipoActividad : 'Caminata',
        tipoReto: 'Fondo',
        fechaInicia: '10-11-2020',
        fechaFinaliza: '10-12-2020',
        objetivo: '300'
      },
      { idReto: '3',
        nombreReto: 'Nadar 5k',
        tipoActividad : 'Natacion',
        tipoReto: 'Fondo',
        fechaInicia: '20-11-2020 8:00:00',
        fechaFinaliza: '27-11-2020 8:00:00',
        objetivo: '5'
      }
    ];

    this.carrerasGrupo = [
      { idCarrera: '1',
        nombreCarrera: 'Palmarin',
        fecha : '15-12-2020',
        tipoActividad: 'Ciclismo',
        costo: '20000',
        cuenta: 'CR-574231825',
        mapa: 'xml'
      },
      { idCarrera: '2',
        nombreCarrera: 'Ironman jaco',
        fecha : '20-12-2020',
        tipoActividad: 'Caminata',
        costo: '15000',
        cuenta: 'CR-5778831825',
        mapa: 'xml'
      },
      { idCarrera: '3',
        nombreCarrera: 'Vuelta al Arenal',
        fecha : '10-10-2020',
        tipoActividad: 'Kayak',
        costo: '8000',
        cuenta: 'CR-574231825',
        mapa: 'xml'
      }
      ];
  }

  ngOnInit(): void {
  }

}
