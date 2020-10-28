import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Vistas/login/login.component';
import { FriendsComponent } from './Vistas/friends/friends.component';

const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: '', redirectTo: '/Login', pathMatch: 'full' },
  {path: 'friendSearch', component: FriendsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, FriendsComponent];
