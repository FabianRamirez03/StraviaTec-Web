import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsComponent } from './Vistas/Atleta/friends/friends.component';
import { CarrerasComponent } from './Vistas/Atleta/carreras/carreras.component';
import { InicioComponent } from './Vistas/Atleta/inicio/inicio.component';
import { RetosComponent } from './Vistas/Atleta/retos/retos.component';
import { ProgresoComponent } from './Vistas/Atleta/progreso/progreso.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FriendsComponent,
    CarrerasComponent,
    InicioComponent,
    RetosComponent,
    ProgresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
