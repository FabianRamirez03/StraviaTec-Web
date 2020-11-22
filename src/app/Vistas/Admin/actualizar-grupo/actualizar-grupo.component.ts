import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-actualizar-grupo',
  templateUrl: './actualizar-grupo.component.html',
  styleUrls: ['./actualizar-grupo.component.scss']
})
export class ActualizarGrupoComponent implements OnInit {
  grupo: any;
  admin: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.grupo = value[0];
                                                      this.admin = value[1]; });
  }
  actualizar(): any{
    const nombre = (document.getElementById('NombreGrupo') as HTMLInputElement).value;
    console.log(nombre);
    console.log(this.admin);
    this.httpService.post('http://localhost/APIStraviaTec/Grupo/modifyGroup',
      { idgrupo: this.grupo.idgrupo, Nombre: nombre}).subscribe(
      (resp: HttpResponse<any>) => { const ans = resp; console.log(ans); });
  }
  devolver(): any{
    this.messengerService.setMessage(this.admin.nombreusuario);
    console.log(this.admin);
  }

  ngOnInit(): void {
  }


}
