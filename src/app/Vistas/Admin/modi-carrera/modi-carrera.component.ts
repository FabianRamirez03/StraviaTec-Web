import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modi-carrera',
  templateUrl: './modi-carrera.component.html',
  styleUrls: ['./modi-carrera.component.scss']
})
export class ModiCarreraComponent implements OnInit {
  admin: any;
  carrera: any;
  modify: boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public recibido: any) {
    this.carrera = recibido[0];
    this.modify = recibido[1];
    this.admin = recibido[2];
  }

  ngOnInit(): void {
  }

}
