import { Component, OnInit } from '@angular/core';
import {StateServiceService } from '../../../../Services/state-service.service';

@Component({
  selector: 'app-activity-info',
  templateUrl: './activity-info.component.html',
  styleUrls: ['./activity-info.component.scss']
})
export class ActivityInfoComponent implements OnInit {

  activity;
  constructor(private stateService: StateServiceService) { }

  ngOnInit(): void {
    this.activity = this.stateService.actividad;
  }

}
