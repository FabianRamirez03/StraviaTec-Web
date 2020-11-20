import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modi-retos',
  templateUrl: './modi-retos.component.html',
  styleUrls: ['./modi-retos.component.scss']
})
export class ModiRetosComponent implements OnInit {
  reto: any;
  modify: boolean;
  admin: any;
  constructor(@Inject(MAT_DIALOG_DATA) public recibido: any) {
    this.reto = recibido[0];
    this.modify = recibido[1];
    this.admin = recibido[2];
  }

  ngOnInit(): void {
  }

}
