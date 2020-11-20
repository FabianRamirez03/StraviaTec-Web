import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {MessengerService} from '../../MessengerService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: string;
  contrasena: string;
  existe: any;

  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {}
  login(): void{
    this.usuario = (document.getElementById('user') as HTMLInputElement).value;
    this.contrasena = (document.getElementById('password') as HTMLInputElement).value;
    this.httpService.post('http://localhost/APIStraviaTec/Usuario/validarUser',
      { NombreUsuario: this.usuario, Contrasena: this.contrasena}).subscribe(
      (resp: HttpResponse<number>) => { this.existe = resp;
                                        if (this.existe.validacion ===  1){
          console.log('twins');
          this.messengerService.setMessage(this.usuario);
          this.router.navigate(['/', 'inicio']);
        }
      else{
                                           console.log('notwins');
                                         }});
  }

  ngOnInit(): void {
  }

}
