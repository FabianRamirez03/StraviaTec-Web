import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  username: string;
  name: string;
  lastname: string;
  password: string;
  country: string;
  date: string;
  imagen: string;
  imageByte: string;
  existe: any;

  constructor(public httpService: HttpClient, private router: Router) {
  }

  login(): void{
    this.username = (document.getElementById('user') as HTMLInputElement).value;
    this.password = (document.getElementById('password') as HTMLInputElement).value;
    this.httpService.post('http://localhost/APIStraviaTec/Usuario/validarUser',
      { NombreUsuario: this.username, Contrasena: this.password}).subscribe(
      (resp: HttpResponse<boolean>) => { this.existe = resp;
                                         if (this.existe.validacion as boolean ===  true){
          console.log('twins');
        }
        else{
          console.log('notwins');
          console.log(this.imageByte);
          this.signin();
        }});
  }
  signin(): void{
    const nuevoUsuario = {
        NombreUsuario: (document.getElementById('user') as HTMLInputElement).value,
        Contrasena: (document.getElementById('password') as HTMLInputElement).value,
        Primernombre: (document.getElementById('firstName') as HTMLInputElement).value,
        Apellidos: (document.getElementById('lastName') as HTMLInputElement).value,
        Fechanacimiento: (document.getElementById('birthDate') as HTMLInputElement).value,
        Nacionalidad: (document.getElementById('country') as HTMLInputElement).value,
        Foto: this.imageByte.toString(),
        Administra: 1
    };
    this.httpService.post('http://localhost/APIStraviaTec/Usuario/crearUsuario',
      nuevoUsuario).subscribe(
      (resp: HttpResponse<any>) => { this.router.navigate(['/inicio']);
        });
    this.router.navigate(['/inicio']);
  }

  ngOnInit(): void {
  }

  setByteArray(files): void {
    const reader = new FileReader();
    // this.profile.image = files;
    reader.readAsDataURL(files[0]);
    reader.onload = e => {
      const bytes = reader.result;
      this.imageByte = bytes.toString();
    };
  }
}

