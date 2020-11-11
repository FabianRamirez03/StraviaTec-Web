import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Vistas/login/login.component';
import { FriendsComponent } from './Vistas/Atleta/friends/friends.component';
import { CarrerasComponent } from './Vistas/Atleta/carreras/carreras.component';
import { InicioComponent } from './Vistas/Atleta/inicio/inicio.component';
import { RetosComponent } from './Vistas/Atleta/retos/retos.component';
import { ProgresoComponent } from './Vistas/Atleta/progreso/progreso.component';
import { AdmicarrerasComponent } from './Vistas/Admin/admicarreras/admicarreras.component';
import { AdmiretosComponent } from './Vistas/Admin/admiretos/admiretos.component';

const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: '', redirectTo: '/Login', pathMatch: 'full' },
  {path: 'friendSearch', component: FriendsComponent},
  {path: 'carreras', component: CarrerasComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'retos', component: RetosComponent},
  {path: 'progreso', component: ProgresoComponent},
  {path: 'admicarreras', component: AdmicarrerasComponent},
  {path: 'admiretos', component: AdmiretosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, FriendsComponent, CarrerasComponent, InicioComponent, ProgresoComponent, RetosComponent,
  AdmicarrerasComponent, AdmiretosComponent];
