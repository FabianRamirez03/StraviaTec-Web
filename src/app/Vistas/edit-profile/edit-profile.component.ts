import {Component, Inject, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {compareSegments} from '@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker';
import {MessengerService} from '../../MessengerService';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  usuario: any;
  imageByte: string;

  constructor(public httpService: HttpClient, private router: Router, private sanitizer: DomSanitizer,
              @Inject(MessengerService) public recibido: MessengerService['usuario'], private messengerService: MessengerService) {
    this.usuario = recibido.usuario;
  }

  ngOnInit(): void {
    // this.setByteArray(this.profile.image);
  }

  // tslint:disable-next-line:typedef
  searchPhoto() {
    document.getElementById('file-input').click();
  }

  setByteArray(files): void {
    const reader = new FileReader();
    // this.profile.image = files;
    reader.readAsDataURL(files[0]);
    reader.onload = e => {
      const bytes = reader.result;
      console.log(bytes);
      this.imageByte = bytes.toString();
    };
  }

  printInput(input): void {
    console.log(input);
  }

  updateUser(): void {
    let foto = '';
    if (this.imageByte == null) {
      foto = this.usuario.foto;
    } else {
      foto = this.imageByte.toString();
    }
    const nuevoUsuario = {
      NombreUsuario: this.usuario.nombreusuario,
      Idusuario: this.usuario.idusuario,
      Contrasena: (document.getElementById('password') as HTMLInputElement).value,
      Primernombre: (document.getElementById('firstName') as HTMLInputElement).value,
      Apellidos: (document.getElementById('lastName') as HTMLInputElement).value,
      Fechanacimiento: this.usuario.fechanacimiento,
      Nacionalidad: (document.getElementById('country') as HTMLInputElement).value,
      Foto: foto,
      Administra: this.usuario.administra
    };
    if (this.usuario.contrasena === (document.getElementById('currentPassword') as HTMLInputElement).value) {
      // tslint:disable-next-line:max-line-length
      if ((document.getElementById('password') as HTMLInputElement).value === (document.getElementById('confirmPassword') as HTMLInputElement).value) {
        this.httpService.post('http://localhost/APIStraviaTec/Usuario/modificarUsuario',
          nuevoUsuario).subscribe(
          (resp: HttpResponse<any>) => {
            this.messengerService.usuario = nuevoUsuario;
            alert('Usuario modificado exitosamente :)');
          });
      } else {
        alert('Las contraseñas no coinciden');
      }
    } else {
      alert('La contraseña anterior no coincide');
    }
  }

  deleteUser(): void {
    if (this.usuario.contrasena === (document.getElementById('currentPassword') as HTMLInputElement).value) {
      this.httpService.post('http://localhost/APIStraviaTec/Usuario/eliminarUsuario',
        this.usuario).subscribe(
        (resp: HttpResponse<any>) => {
          this.messengerService.usuario = null;
          alert('Usuario eliminado exitosamente');
          this.router.navigate(['/', 'Login']);
        });
    }
    else{
      alert('Ingrese su contraseña en el apartado current password');
    }
  }
}
