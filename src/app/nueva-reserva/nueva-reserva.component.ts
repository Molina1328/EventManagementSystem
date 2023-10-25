import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { reservaIn } from '../modelos/reserva.interface';
import { ReservasService } from '../servicios/reservas/reservas.service';

@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css']
})
export class NuevaReservaComponent implements OnInit {

  constructor(private router: Router, private api: ReservasService) { }
  datosReserva!: reservaIn;
  nuevoForm = new FormGroup({
    idReservacion: new FormControl(0),
    usuarioId: new FormControl(0),
    eventoId: new FormControl(0),
    numAsistentes: new FormControl(0),
    estado: new FormControl(''),
    fechaCreacion: new FormControl(''),
    pago: new FormControl(0),
  });

  ngOnInit(): void {

  }


  postForm(form: any) {

    this.api.postRes(form).subscribe(data => {
      console.log("Datos nuevos: ", form)
      this.router.navigate(['reservacion']);
    })
  }
  salir() {
    this.router.navigate(['reservacion']);
  }


}
