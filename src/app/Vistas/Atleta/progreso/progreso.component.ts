import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.scss']
})
export class ProgresoComponent implements OnInit {
  retos: any;
  atleta: any;
  eventos: any;
  fecha = new Date();
  fechafaltante: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.atleta = recibido.usuario;
    this.httpService.post('http://localhost/APIStraviaTec/Retos/retosPorUsuario', { Idusuario: this.atleta.idusuario}).subscribe(
      (resp: HttpResponse<any>) => { this.retos = resp; console.log(resp); });
  }
  fechas(reto: any): number{
    const diff = Math.abs(new Date(reto.fechaFinal).getTime() - this.fecha.getTime());
    return Math.ceil(diff / (1000 * 3600 * 24));
  }
  porcentaje(reto: any): number{
    const objetivo = parseInt(reto.objetivo, 10);
    if (reto.tipoReto === 'fondo' ){
      if (reto.kilometraje === ''){
        return ((0 * 100) / objetivo);
      }else{const kilometraje = parseFloat(reto.kilometraje);
            return ((kilometraje * 100) / objetivo);
      }
    }
    else{
      if (reto.altura === ''){
        return ((0 * 100) / objetivo);
      }else{
        const altura = parseFloat(reto.kilometraje);
        return ((altura * 100) / objetivo);
      }
    }
  }
  ngOnInit(): void {
  }


}
