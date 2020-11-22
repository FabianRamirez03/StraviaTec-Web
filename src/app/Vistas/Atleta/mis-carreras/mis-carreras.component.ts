import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-mis-carreras',
  templateUrl: './mis-carreras.component.html',
  styleUrls: ['./mis-carreras.component.scss']
})
export class MisCarrerasComponent implements OnInit {
  misCarreras: any;
  atleta: any;
  constructor(public httpService: HttpClient, @Inject(MessengerService) public recibido: MessengerService['usuario'],
              private messengerService: MessengerService) {
    this.atleta = recibido.usuario;
    this.httpService.post('http://localhost/APIStraviaTec/Carrera/carrerasPorUsuario', { Idusuario: this.atleta.idusuario}).subscribe(
      (resp: HttpResponse<any>) => { this.misCarreras = resp; console.log(resp); });
  }

  ngOnInit(): void {
  }

  tablaPosiciones(carrera: any): void{
    this.messengerService.setMessage(carrera);
}

}
