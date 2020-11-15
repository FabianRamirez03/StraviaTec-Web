import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './Vistas/Cliente/Home/Components/home-header/home-header.component';
import { MapComponent } from './Vistas/Cliente/Actividades/map/map.component';
import { HomeFooterComponent } from './Vistas/Cliente/Home/Components/home-footer/home-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeHeaderComponent,
    MapComponent,
    HomeFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
