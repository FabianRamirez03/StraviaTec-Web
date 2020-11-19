import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  atletas: any;
  private search: string;

  constructor(public httpService: HttpClient, private router: Router) {
    this.atletas = ['Mariana', 'Mario', 'Wajib', 'Fabian', 'Mario', 'Wajib', 'Fabian'];
  }
  openDialog(atletas: any): void{
    const found = false;
  }
  buscarAmigo(): void{}
  agregarAmigo(): void{}
  ngOnInit(): void {
  }

}
