import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subs-carrera',
  templateUrl: './subs-carrera.component.html',
  styleUrls: ['./subs-carrera.component.scss']
})
export class SubsCarreraComponent implements OnInit {

  imageByte: string;
  constructor() { }

  ngOnInit(): void {
  }

  setByteArray(files): void {
    const reader = new FileReader();
    // this.profile.image = files;
    reader.readAsDataURL(files[0]);
    reader.onload = e => {
      const bytes = reader.result;
      this.imageByte = bytes.toString();
    };
  }
}
