import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-crear-carreras',
  templateUrl: './crear-carreras.component.html',
  styleUrls: ['./crear-carreras.component.scss']
})
export class CrearCarrerasComponent implements OnInit {
  carrera: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.carrera = value; });
  }

  ngOnInit(): void {
  }

}
