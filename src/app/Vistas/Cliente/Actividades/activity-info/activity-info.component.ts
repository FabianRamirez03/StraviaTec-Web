import { Component, OnInit } from '@angular/core';
import {StateServiceService } from '../../../../Services/state-service.service';
import * as L from 'leaflet';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';


@Component({
  selector: 'app-activity-info',
  templateUrl: './activity-info.component.html',
  styleUrls: ['./activity-info.component.scss']
})
export class ActivityInfoComponent implements OnInit {

  constructor(private stateService: StateServiceService) { }
  activity;
  metaData;
  distance;
  startTime;
  endTime;
  totalTime;
  movingSpeed;
  maxElevation;
  minElevation;
  elevationGain;
  elevationLoss;


  ngOnInit(): void {
    this.activity = this.stateService.actividad;
    this.setMetaData();
  }
  setMetaData(): void{
    let gpxHTml;
    gpxHTml = new L.GPX(this.activity.gpx, {
      async: true,
      polyline_options: {
        color: 'orange',
        opacity: 0.75,
        weight: 3,
        lineCap: 'round'
      }
    }).on('loaded', e => {
      this.distance = (e.target.get_distance() / 1000).toFixed(2) ;
      this.startTime = e.target.get_start_time().toLocaleTimeString();
      this.endTime = e.target.get_end_time().toLocaleTimeString();
      this.totalTime = this.convertMS(e.target.get_total_time());
      this.movingSpeed = e.target.get_moving_speed().toFixed(2);
      this.maxElevation = e.target.get_elevation_max().toFixed(2);
      this.minElevation = e.target.get_elevation_min().toFixed(2);
      this.elevationGain = e.target.get_elevation_gain().toFixed(2);
      this.elevationLoss = e.target.get_elevation_loss().toFixed(2);
    });
  }
  // tslint:disable-next-line:typedef
  convertMS( milliseconds ) {
    // tslint:disable-next-line:one-variable-per-declaration
    let day, hour, minute, seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    if (minute < 10) {
      minute = '0' + minute.toString();
    }
    if (seconds < 10) {
      seconds = '0' + seconds.toString();
    }
    return hour.toString() + ':' + minute.toString() + ':' + seconds.toString();
  }
}

