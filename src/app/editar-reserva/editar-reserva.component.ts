import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ReservasService } from '../../app/servicios/reservas/reservas.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validator, NgForm, Validators } from '@angular/forms';
import { ResponseI } from '../modelos/response.interface'
import { reservaIn } from '../../app/modelos/reserva.interface';
@Component({
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.component.html',
  styleUrls: ['./editar-reserva.component.css']
})
export class EditarReservaComponent implements OnInit {


  constructor(private activerouter: ActivatedRoute, private router: Router, private api: ReservasService) { }
  reservaID = this.activerouter.snapshot.paramMap.get('id');
  datosReserva!: reservaIn;

  editarForm = new FormGroup({
    idReservacion: new FormControl(0),
    usuarioId: new FormControl(0),
    eventoId: new FormControl(0),
    numAsistentes: new FormControl(0),
    estado: new FormControl(''),
    fechaCreacion: new FormControl(''),
    pago: new FormControl(0),
  });

  ngOnInit(): void {
    console.log(this.reservaID)
    this.api.getSingleRes(this.reservaID).subscribe(data => {
      this.datosReserva = data;
      console.log(data);
      this.editarForm.setValue({
        'idReservacion': this.datosReserva.idReservacion,
        'usuarioId': this.datosReserva.usuarioId,
        'eventoId': this.datosReserva.eventoId,
        'numAsistentes': this.datosReserva.numAsistentes,
        'estado': this.datosReserva.estado,
        'fechaCreacion': this.datosReserva.fechaCreacion,
        'pago': this.datosReserva.pago,
      });

      console.log(this.editarForm.value);

    })
  }

  putForm(form: any) {
    this.api.putRes(form).subscribe(data => {
      console.log("Datos editados: ", form)
      this.router.navigate(['reservacion']);
    })
  }

  eliminar() {
    let datos: any = this.editarForm.value;
    this.api.deletRes(datos).subscribe(data => {
      this.router.navigate(['reservacion']);
      console.log(data)
    })
  }

  salir() {
    this.router.navigate(['reservacion']);
  }



}
