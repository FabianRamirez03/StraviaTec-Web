import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-crear-retos',
  templateUrl: './crear-retos.component.html',
  styleUrls: ['./crear-retos.component.scss']
})
export class CrearRetosComponent implements OnInit {
  admin: any;

  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.admin = value; });
  }
  crear(): void{
  }

  ngOnInit(): void {
  }

}
