import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-modi-carrera',
  templateUrl: './modi-carrera.component.html',
  styleUrls: ['./modi-carrera.component.scss']
})
export class ModiCarreraComponent implements OnInit {
  admin: any;
  carrera: any;
  modify: boolean;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.carrera = value; });
  }

  ngOnInit(): void {
  }

}
