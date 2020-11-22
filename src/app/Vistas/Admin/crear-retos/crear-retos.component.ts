import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-crear-retos',
  templateUrl: './crear-retos.component.html',
  styleUrls: ['./crear-retos.component.scss']
})
export class CrearRetosComponent implements OnInit {
  admin: any;
  reto: any;

  constructor(public httpService: HttpClient, private router: Router,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.admin = recibido.usuario;
  }
  crear(): void{
    let bool = true;
    if ((document.getElementById('privacidad') as HTMLInputElement).value === 'true'){
      bool = true;
    }
    else{
      bool = false;
    }
    const reto = {
      Idorganizador: this.admin.idusuario,
      Nombrereto: (document.getElementById('name') as HTMLInputElement).value,
      Objetivoreto: (document.getElementById('objetivo') as HTMLInputElement).value,
      Fechainicio: (document.getElementById('inicioDate') as HTMLInputElement).value,
      Fechafinaliza: (document.getElementById('finaldate') as HTMLInputElement).value,
      Tipoactividad: (document.getElementById('tipo') as HTMLInputElement).value,
      Tiporeto: (document.getElementById('Reto') as HTMLInputElement).value,
      Privada: bool
    };
    console.log(reto);
    this.httpService.post('http://localhost/APIStraviaTec/Retos/addReto',
      reto).subscribe(
      (resp: HttpResponse<any>) => { this.reto = resp; console.log(resp); });
  }

  ngOnInit(): void {
  }

}
