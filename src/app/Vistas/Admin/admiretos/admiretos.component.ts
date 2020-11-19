import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModiRetosComponent} from '../modi-retos/modi-retos.component';

@Component({
  selector: 'app-admiretos',
  templateUrl: './admiretos.component.html',
  styleUrls: ['./admiretos.component.scss']
})
export class AdmiretosComponent implements OnInit {
  retos: any;
  reto: any;
  constructor(public dialog: MatDialog) {
    this.retos = ['Mariana', 'Julio', 'Mariana', 'Julio', 'Mariana', 'Julio'];
  }

  ngOnInit(): void {
  }
  openDialog(retomod: object[], modify: boolean): void {
    const param = [retomod, modify, this.reto];
    const dialogRef = this.dialog.open(ModiRetosComponent, {
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
    dialogRef.afterClosed().subscribe(res => {console.log(res); });
  }

}
