import {Component, Inject, OnInit} from '@angular/core';
import {MessengerService} from '../../../MessengerService';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-crear-grupos',
  templateUrl: './crear-grupos.component.html',
  styleUrls: ['./crear-grupos.component.scss']
})
export class CrearGruposComponent implements OnInit {
  admin: any;
  constructor(@Inject(MessengerService) public recibido: MessengerService['usuario'], public httpService: HttpClient) {
    this.admin = recibido.usuario; }

  ngOnInit(): void {
  }

  crearGrupo(): void{
    this.httpService.post('http://localhost/APIStraviaTec/Grupo/addGroup',
      { Idadministrador: this.admin.Idadministrador, Nombre: (document.getElementById('name') as HTMLInputElement).value}).subscribe(
      (resp: HttpResponse<any>) => { const ans = resp; console.log(ans); });
  }

}
