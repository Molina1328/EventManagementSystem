import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EventoComponent } from './evento/evento.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { EditarReservaComponent } from './editar-reserva/editar-reserva.component';
import { NuevaReservaComponent } from './nueva-reserva/nueva-reserva.component';
import { NuevoEventoComponent } from './nuevo-evento/nuevo-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EventoComponent,
    ReservacionComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent,
    EditarReservaComponent,
    NuevaReservaComponent,
    NuevoEventoComponent,
    EditarEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
