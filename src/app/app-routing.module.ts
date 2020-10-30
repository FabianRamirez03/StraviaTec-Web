import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Vistas/login/login.component';
<<<<<<< HEAD
import {SignInComponent} from './Vistas/sign-in/sign-in.component';
=======
import { FriendsComponent } from './Vistas/friends/friends.component';
>>>>>>> friends_page

const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'SignIn', component: SignInComponent},
  {path: '', redirectTo: '/Login', pathMatch: 'full' },
  {path: 'friendSearch', component: FriendsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD
export const routingComponents = [LoginComponent, SignInComponent];
=======
export const routingComponents = [LoginComponent, FriendsComponent];
>>>>>>> friends_page
