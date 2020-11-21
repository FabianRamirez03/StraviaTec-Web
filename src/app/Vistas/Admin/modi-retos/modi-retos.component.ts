import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-modi-retos',
  templateUrl: './modi-retos.component.html',
  styleUrls: ['./modi-retos.component.scss']
})
export class ModiRetosComponent implements OnInit {
  reto: any;
  modify: boolean;
  admin: any;
  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService) {
    this.messengerService.message.subscribe(value => {this.admin = value; });
  }
  modificar(): void{}

  ngOnInit(): void {
  }

}
