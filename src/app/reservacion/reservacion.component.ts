import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../servicios/reservas/reservas.service'
import { Router } from '@angular/router';
import { reservaI } from '../../app/modelos/ListaReservas.interface';
import { usuarioI } from '../../app/modelos/ListaUsuario.interface';
import { UsuarioComponent } from '../usuario/usuario.component'
import { UsuariosService } from '../servicios/usuarios/usuarios.service';
@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  usr!: usuarioI[];
  reserva!: reservaI[];

  constructor(private api: ReservasService, private router: Router, private api2: UsuariosService) {

  }


  ngOnInit(): void {
    this.api.getAllRes().subscribe(data => {
      this.reserva = data;
    })
  }

  editarReserva(id: any) {
    this.router.navigate(['editarR', id]);
  }
  nuevoReserva() {
    this.router.navigate(['nuevaR'])
  }
}
