import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-gestion-solicitudes',
  templateUrl: './gestion-solicitudes.component.html',
  styleUrls: ['./gestion-solicitudes.component.scss']
})
export class GestionSolicitudesComponent implements OnInit {

  solicitudes: any;
  admin: any;
  constructor(public httpService: HttpClient,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.admin = recibido.usuario;
    // cambiar**********
    this.httpService.post('http://localhost/APIStraviaTec/Carrera/participantesCarrera',
      { idcarrera: this.solicitudes.idCarrera}).subscribe(
      (resp: HttpResponse<any>) => { this.solicitudes = resp; console.log(resp); });
  }

  public aceptarSolicitud(idUsuario: number): void{
    this.httpService.post('http://localhost/APIStraviaTec/Afiliaciones/aceptarSolicitud',
      { idcarrera: this.solicitudes.idCarrera}).subscribe(
      (resp: HttpResponse<any>) => { this.solicitudes = resp; console.log(resp); });
}
  public eliminarSolicitud(idUsuario: number): void{
    this.httpService.post('http://localhost/APIStraviaTec/Afiliaciones/eliminarSolicitud',
      { idcarrera: this.solicitudes.idCarrera}).subscribe(
      (resp: HttpResponse<any>) => { this.solicitudes = resp; console.log(resp); });
  }

  ngOnInit(): void {
  }

}
