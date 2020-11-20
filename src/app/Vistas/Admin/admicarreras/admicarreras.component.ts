import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { ModiCarreraComponent } from '../modi-carrera/modi-carrera.component';

@Component({
  selector: 'app-admicarreras',
  templateUrl: './admicarreras.component.html',
  styleUrls: ['./admicarreras.component.scss']
})
export class AdmicarrerasComponent implements OnInit {
  retos: any;
  administrador: any;
  constructor(public httpService: HttpClient, private router: Router, public dialog: MatDialog) {

    this.retos = ['Mariana', 'Julio', 'Mariana', 'Julio', 'Mariana', 'Julio'];
  }
  misCarreras(): void{}

  ngOnInit(): void {
  }
  openDialog(retomod: object[], modify: boolean): void {
    const param = [retomod, modify, this.administrador];
    const dialogRef = this.dialog.open(ModiCarreraComponent, {
      width: '70%',
      height: '70%',
      data: param,
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      }
    });
  }
}
