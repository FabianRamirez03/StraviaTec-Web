import {Component, Inject, OnInit} from '@angular/core';
import {StateServiceService } from '../../../../Services/state-service.service';
import {Router} from '@angular/router';
import {MessengerService} from '../../../../MessengerService';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.scss']
})


export class ActivityPageComponent implements OnInit {
  atleta: any;
  actividades: any;

  constructor(public httpService: HttpClient, private stateService: StateServiceService, private router: Router,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.atleta = recibido.usuario;
    this.httpService.post('http://localhost/APIStraviaTec/Actividad/activiPorUsuario',
      { idusuario: this.atleta.idusuario}).subscribe(
      (resp: HttpResponse<any>) => { this.actividades = resp; console.log(resp); });
  }
  goToCategoryInfo(category): void {
    this.stateService.actividad = category;
    this.router.navigate(['/activityInfo']);
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  clickMethod(activity: any): void {
    if (confirm('Are you sure to delete ' + activity.nombreActividad)) {
      this.httpService.post('http://localhost/APIStraviaTec/Actividad/deleteActivity',
        { idactividad: activity.idActividad}).subscribe(
        (resp: HttpResponse<any>) => {alert(activity.nombreActividad + ' Fue eliminado correctamente :)'); });
    }
  }
}
