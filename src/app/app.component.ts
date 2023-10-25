import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoManejoEventos';
  constructor(private router: Router){
    
  }
  goToUser() {
    this.router.navigate(['/', 'usuario']);
  }
  goToEve() {
    this.router.navigate(['/', 'evento']);
  }
  goToRes() {
    this.router.navigate(['/', 'reservacion']);
  }
  goToNU(){
    this.router.navigate(['/', 'nuevoU']);
  }
}
