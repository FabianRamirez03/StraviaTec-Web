import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Vistas/login/login.component';
import {SignInComponent} from './Vistas/sign-in/sign-in.component';
import {FriendsComponent} from './Vistas/Atleta/friends/friends.component';
import {HomePageComponent} from './Vistas/Cliente/Home/home-page/home-page.component';
import {ActivityPageComponent} from './Vistas/Cliente/Actividades/activity-page/activity-page.component';
import {AddActivtyComponent} from './Vistas/Cliente/Actividades/add-activty/add-activty.component';
import {ActivityInfoComponent} from './Vistas/Cliente/Actividades/activity-info/activity-info.component';
import {EditProfileComponent} from './Vistas/edit-profile/edit-profile.component';
import { CarrerasComponent } from './Vistas/Atleta/carreras/carreras.component';
import { InicioComponent } from './Vistas/Atleta/inicio/inicio.component';
import { RetosComponent } from './Vistas/Atleta/retos/retos.component';
import { ProgresoComponent } from './Vistas/Atleta/progreso/progreso.component';
import { AdmicarrerasComponent } from './Vistas/Admin/admicarreras/admicarreras.component';
import { AdmiretosComponent } from './Vistas/Admin/admiretos/admiretos.component';
import {UnirseGrupoComponent} from './Vistas/Atleta/unirse-grupo/unirse-grupo.component';
import {MisGruposComponent} from './Vistas/Atleta/mis-grupos/mis-grupos.component';
import {AdminPatrocinadoresComponent} from './Vistas/Admin/admin-patrocinadores/admin-patrocinadores.component';
import {NuevoPatrocinadorComponent} from './Vistas/Admin/nuevo-patrocinador/nuevo-patrocinador.component';
import {ParticipantesCarreraComponent} from './Vistas/Admin/participantes-carrera/participantes-carrera.component';
import {ParticipantesPorCategoriasComponent} from './Vistas/Admin/participantes-por-categorias/participantes-por-categorias.component';
import {ModiCarreraComponent } from './Vistas/Admin/modi-carrera/modi-carrera.component';
import {ModiRetosComponent } from './Vistas/Admin/modi-retos/modi-retos.component';
import {AdmiGruposComponent} from './Vistas/Admin/admi-grupos/admi-grupos.component';
import {GestionMiembrosGrupoComponent} from './Vistas/Admin/gestion-miembros-grupo/gestion-miembros-grupo.component';
import {ActualizarGrupoComponent} from './Vistas/Admin/actualizar-grupo/actualizar-grupo.component';
import {ActividadesGrupoComponent} from './Vistas/Atleta/actividades-grupo/actividades-grupo.component';
import {MisCarrerasComponent} from './Vistas/Atleta/mis-carreras/mis-carreras.component';
import {GestionSolicitudesComponent} from './Vistas/Admin/gestion-solicitudes/gestion-solicitudes.component';
import { SubsCarreraComponent } from './Vistas/Atleta/subs-carrera/subs-carrera.component';
import { CrearCarrerasComponent } from './Vistas/Admin/crear-carreras/crear-carreras.component';
import { CrearRetosComponent } from './Vistas/Admin/crear-retos/crear-retos.component';
import {CrearGruposComponent} from './Vistas/Admin/crear-grupos/crear-grupos.component';
import {CarrerasGrupoComponent} from './Vistas/Atleta/carreras-grupo/carreras-grupo.component';
import {C} from '@angular/cdk/keycodes';

const routes: Routes = [
  {path: '', redirectTo: '/carrerasGrupo', pathMatch: 'full' },
  {path: 'Login', component: LoginComponent},
  {path: 'SignIn', component: SignInComponent},
  {path: 'friendSearch', component: FriendsComponent},
  {path: 'Home', component: HomePageComponent},
  {path: 'Activity', component: ActivityPageComponent},
  {path: 'newActivity', component: AddActivtyComponent},
  {path: 'activityInfo', component: ActivityInfoComponent},
  {path: 'editProfile', component: EditProfileComponent},
  {path: 'carreras', component: CarrerasComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'retos', component: RetosComponent},
  {path: 'progreso', component: ProgresoComponent},
  {path: 'admicarreras', component: AdmicarrerasComponent},
  {path: 'admiretos', component: AdmiretosComponent},
  {path: 'Grupos', component: UnirseGrupoComponent},
  {path: 'admigrupos', component: AdmiGruposComponent},
  {path: 'misGrupos', component: MisGruposComponent},
  {path: 'Patrocinadores', component: AdminPatrocinadoresComponent},
  {path: 'nuevoPatrocinador', component: NuevoPatrocinadorComponent},
  {path: 'participantesCarrera', component: ParticipantesCarreraComponent},
  {path: 'participantesCategoria', component: ParticipantesPorCategoriasComponent},
  {path: 'modiCarreras', component: ModiCarreraComponent},
  {path: 'modiRetos', component: ModiRetosComponent},
  {path: 'subsCarreras', component: SubsCarreraComponent},
  {path: 'gestionGrupos', component: GestionMiembrosGrupoComponent},
  {path: 'actualizarGrupo', component: ActualizarGrupoComponent},
  {path: 'actividadesGrupo', component: ActividadesGrupoComponent},
  {path: 'misCarreras', component: MisCarrerasComponent},
  {path: 'gestionSolicitudes', component: GestionSolicitudesComponent},
  {path: 'crearGrupo', component: CrearGruposComponent},
  {path: 'gestionSolicitudes', component: GestionSolicitudesComponent},
  {path: 'crearCarrera', component: CrearCarrerasComponent},
  {path: 'crearRetos', component: CrearRetosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [LoginComponent, SignInComponent, FriendsComponent, HomePageComponent,
  ActivityPageComponent, AddActivtyComponent, ActivityInfoComponent, EditProfileComponent, CarrerasComponent,
  InicioComponent, RetosComponent, ProgresoComponent, AdmicarrerasComponent, AdmiretosComponent, UnirseGrupoComponent,
  MisGruposComponent, AdminPatrocinadoresComponent, NuevoPatrocinadorComponent, ParticipantesCarreraComponent,
   SubsCarreraComponent, ParticipantesPorCategoriasComponent, ModiCarreraComponent, ModiRetosComponent, AdmiGruposComponent ,
  GestionMiembrosGrupoComponent, ActualizarGrupoComponent, ActividadesGrupoComponent, MisCarrerasComponent,
  GestionSolicitudesComponent, CrearCarrerasComponent, CrearRetosComponent, CrearGruposComponent];
