import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './Vistas/Cliente/Home/Components/home-header/home-header.component';
import { MapComponent } from './Vistas/Cliente/Actividades/map/map.component';
import { AdminHeaderComponent } from './Vistas/Cliente/Home/Components/admin-header/admin-header.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeHeaderComponent,
    MapComponent,
    AdminHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
