import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Vistas/login/login.component';
import {SignInComponent} from './Vistas/sign-in/sign-in.component';
import { FriendsComponent } from './Vistas/friends/friends.component';
import {HomePageComponent} from './Vistas/Cliente/Home/home-page/home-page.component';
import {ActivityPageComponent} from './Vistas/Cliente/Actividades/activity-page/activity-page.component';
import {AddActivtyComponent} from './Vistas/Cliente/Actividades/add-activty/add-activty.component';
import {ActivityInfoComponent} from './Vistas/Cliente/Actividades/activity-info/activity-info.component';
import {EditProfileComponent} from './Vistas/edit-profile/edit-profile.component';
import { FriendsComponent } from './Vistas/Atleta/friends/friends.component';
import { CarrerasComponent } from './Vistas/Atleta/carreras/carreras.component';
import { InicioComponent } from './Vistas/Atleta/inicio/inicio.component';
import { RetosComponent } from './Vistas/Atleta/retos/retos.component';
import { ProgresoComponent } from './Vistas/Atleta/progreso/progreso.component';
import { AdmicarrerasComponent } from './Vistas/Admin/admicarreras/admicarreras.component';
import { AdmiretosComponent } from './Vistas/Admin/admiretos/admiretos.component';

const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'SignIn', component: SignInComponent},
  {path: '', redirectTo: '/Login', pathMatch: 'full' },
  {path: 'friendSearch', component: FriendsComponent},
  {path: 'Home', component: HomePageComponent},
  {path: 'Activity', component: ActivityPageComponent},
  {path: 'newActivity', component: AddActivtyComponent},
  {path: 'activityInfo', component: ActivityInfoComponent},
  {path: 'editProfile', component: EditProfileComponent}
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
export const routingComponents = [LoginComponent, SignInComponent, FriendsComponent, HomePageComponent,
  ActivityPageComponent, AddActivtyComponent, ActivityInfoComponent, EditProfileComponent];
