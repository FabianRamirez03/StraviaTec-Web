import {Component, Inject, OnInit} from '@angular/core';
import {MessengerService} from '../../../MessengerService';

@Component({
  selector: 'app-nuevo-patrocinador',
  templateUrl: './nuevo-patrocinador.component.html',
  styleUrls: ['./nuevo-patrocinador.component.scss']
})
export class NuevoPatrocinadorComponent implements OnInit {
  admin: any;
  constructor(@Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.admin = recibido.usuario; }

  ngOnInit(): void {
  }

}
