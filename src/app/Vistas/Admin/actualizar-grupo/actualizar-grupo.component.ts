import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-actualizar-grupo',
  templateUrl: './actualizar-grupo.component.html',
  styleUrls: ['./actualizar-grupo.component.scss']
})
export class ActualizarGrupoComponent implements OnInit {
  grupo: any;
  constructor(public httpService: HttpClient) {
    this.grupo = [
      {nombre: 'Moncho Bikers',
        idgrupo : '1'}];
  }

  ngOnInit(): void {
  }


}
