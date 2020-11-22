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
  name: string;
  usuario: any;
  contrasena: string;
  existe: any;

  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {}
  login(): void{
    this.name = (document.getElementById('user') as HTMLInputElement).value;
    this.contrasena = (document.getElementById('password') as HTMLInputElement).value;
    this.httpService.post('http://localhost/APIStraviaTec/Usuario/validarUser',
      { NombreUsuario: this.name, Contrasena: this.contrasena}).subscribe(
      (resp: HttpResponse<number>) => { this.existe = resp;
                                        if (this.existe.validacion ===  1){
          console.log('twins');
          this.httpService.post('http://localhost/APIStraviaTec/Usuario/porNombreUsuario',
                                            {nombreusuario: this.name}).subscribe((ans: HttpResponse<any>) => {this.usuario = ans;
            // tslint:disable-next-line:max-line-length
                                                                                                               this.messengerService.usuario = this.usuario;
                                                                                                               this.router.navigate(['/', 'inicio']); });
        }
                                        else if (this.existe.validacion ===  2){
                                           console.log('notwins');
                                           this.httpService.post('http://localhost/APIStraviaTec/Usuario/porNombreUsuario',
                                            {nombreusuario: this.name}).subscribe((ans: HttpResponse<any>) => {this.usuario = ans;
                                             // tslint:disable-next-line:max-line-length
                                                                                                               this.messengerService.usuario = this.usuario;
                                             // tslint:disable-next-line:max-line-length
                                                                                                               this.messengerService.setMessage(this.usuario);
                                                                                                               this.router.navigate(['/', 'admigrupos']); });
                                         }
      else{
        alert('username o contrasena incorrecta');
                                        }});
  }

  ngOnInit(): void {
  }

}
