import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-modi-carrera',
  templateUrl: './modi-carrera.component.html',
  styleUrls: ['./modi-carrera.component.scss']
})
export class ModiCarreraComponent implements OnInit {
  admin: any;
  carrera: any;
  modify: boolean;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.carrera = value[0]; this.admin = value[1]; });
    console.log(this.admin);
  }
  modificar(): void{
    const carreraMod = {
      Idcarrera: this.carrera.idcarrera,
      Idorganizador: this.admin.idusuario,
      Nombrecarrera: (document.getElementById('name') as HTMLInputElement).value,
      Fechacarrera: this.carrera.idcarrera,
      Tipoactividad: (document.getElementById('tipo') as HTMLInputElement).value,
      Recorrido: this.carrera.Recorrido,
      Privada: (document.getElementById('Carrera') as HTMLInputElement).value,
      Costo: (document.getElementById('costo') as HTMLInputElement).value,
      Cuentabancaria: (document.getElementById('cuenta') as HTMLInputElement).value,
    };
    this.httpService.post('http://localhost/APIStraviaTec/Carrera/modifCarrera',
      carreraMod).subscribe(
      (resp: HttpResponse<any>) => { this.carrera = resp; console.log(resp); });
  }
  volver(): void{
    console.log(this.admin);
    this.messengerService.setMessage([0, this.admin]);
  }

  ngOnInit(): void {
  }

}
