import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuarioComponent}from './usuario/usuario.component';
import {EventoComponent} from './evento/evento.component';
import {ReservacionComponent} from './reservacion/reservacion.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { EditarReservaComponent } from './editar-reserva/editar-reserva.component';
import { NuevaReservaComponent } from './nueva-reserva/nueva-reserva.component';
import { NuevoEventoComponent } from './nuevo-evento/nuevo-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';
const routes: Routes = [
  //{path:'', redirectTo:'principal', pathMatch:'full'},
  //{path:'principal', component:UsuarioComponent},


  {path:'usuario', component:UsuarioComponent},
  {path:'reservacion', component:ReservacionComponent},
  {path:'evento', component:EventoComponent},
  {path:'nuevoU', component:NuevoUsuarioComponent},
  {path: 'editarU/:id', component:EditarUsuarioComponent},
  {path: 'nuevaR', component:NuevaReservaComponent},
  {path: 'editarR/:id', component:EditarReservaComponent},
  {path: 'nuevoE', component:NuevoEventoComponent},
  {path: 'editarE/:id', component:EditarEventoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponentes = [UsuarioComponent, EventoComponent, ReservacionComponent, NuevoUsuarioComponent,
  EditarUsuarioComponent, EditarReservaComponent, NuevaReservaComponent]