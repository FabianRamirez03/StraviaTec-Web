import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  atletas: any;
  private search: string;

  constructor() {
    this.atletas = ['Mariana', 'Julio'];
  }
  openDialog(atletas: any): void{
    const found = false;
  }

  ngOnInit(): void {
  }

}