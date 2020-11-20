import {Component, NgZone, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  atletas: any;
  atleta: any;
  name: any;
  xml: any;
  private messageSubscription: Subscription;

  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.name = value; });
    console.log(this.name);
    this.httpService.post('http://localhost/APIStraviaTec/Usuario/porNombreUsuario',
      {nombreusuario: this.name}).subscribe((ans: HttpResponse<any>) => {this.atleta = ans;
                                                                         this.httpService.post('http://localhost/APIStraviaTec/Usuario/friendsActivity',
      {idusuario: this.atleta.idusuario}).subscribe((resp: HttpResponse<any>) => {this.atletas = resp;
                                                                                  console.log(this.atletas); }); });
  }
  misRetos(): void{
    this.messengerService.setMessage(this.atleta);
  }
  retos(): void{
    this.messengerService.setMessage(this.atleta);
  }
  misCarreras(): void{
    this.messengerService.setMessage(this.atleta);
  }
  carreras(): void {
    this.messengerService.setMessage(this.atleta);
  }
  misGrupos(): void{
    this.messengerService.setMessage(this.atleta);
  }
  grupos(): void {
    this.messengerService.setMessage(this.atleta);
  }

  ngOnInit(): void {
  }


}
