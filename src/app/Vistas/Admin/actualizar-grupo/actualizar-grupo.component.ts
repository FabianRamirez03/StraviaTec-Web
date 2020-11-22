import {Component, Inject, OnInit} from '@angular/core';
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
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.admin = recibido.usuario;
    this.messengerService.message.subscribe(value => {this.grupo = value; });
  }
  actualizar(): any{
    const nombre = (document.getElementById('NombreGrupo') as HTMLInputElement).value;
    this.httpService.post('http://localhost/APIStraviaTec/Grupo/modifyGroup',
      { idgrupo: this.grupo.idgrupo, Nombre: nombre}).subscribe(
      (resp: HttpResponse<any>) => { const ans = resp; console.log(ans); });
  }
  devolver(): any{
    this.messengerService.setMessage(this.admin.nombreusuario);
  }

  ngOnInit(): void {
  }


}
