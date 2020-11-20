import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  atletas: any;
  atleta: any;
  private search: string;
  private messageSubscription: Subscription;

  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.atleta = value; });
  }
  openDialog(atletas: any): void{
    const found = false;
  }
  buscarAmigo(): void{
    this.search = (document.getElementById('search') as HTMLInputElement).value;
    console.log(this.search);
    this.httpService.post('http://localhost/APIStraviaTec/Usuario/buscarUsuario', { primernombre: this.search}).subscribe(
      (resp: HttpResponse<any>) => { this.atletas = resp; console.log(resp); });
  }
  agregarAmigo(): void{}
  ngOnInit(): void {
  }

}
