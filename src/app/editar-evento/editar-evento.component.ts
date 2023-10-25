import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from '../servicios/eventos/eventos.service';
import { eventoIn } from '../../app/modelos/eventos.interface';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent implements OnInit{
  constructor(private activerouter: ActivatedRoute, private router: Router, private api: EventosService) { }

  eventoID = this.activerouter.snapshot.paramMap.get('id');
  datosEvento!: eventoIn;

  editarForm = new FormGroup({
    idEvento: new FormControl(0),
    nombreEvento: new FormControl(''),
    fechaEvento: new FormControl(''),
    lugarEvento: new FormControl(''),
    capacidadEvento: new FormControl(0)

  });

  
  ngOnInit(): void {
    console.log(this.eventoID)
    this.api.getSingleEve(this.eventoID).subscribe(data => {
      this.datosEvento = data;
      console.log(data);
      this.editarForm.setValue({
        'idEvento': this.datosEvento.idEvento,
        'nombreEvento': this.datosEvento.nombreEvento,
        'fechaEvento': this.datosEvento.fechaEvento,
        'lugarEvento': this.datosEvento.lugarEvento,
        'capacidadEvento': this.datosEvento.capacidadEvento,

      });
      console.log(this.editarForm.value);

    })
  }
  putForm(form: any) {
    this.api.putEve(form).subscribe(data => {
      console.log("Datos editados: ", form)
      this.router.navigate(['evento']);
    })
  }

  eliminar() {
    let datos: any = this.editarForm.value;
    this.api.deletEve(datos).subscribe(data => {
      console.log(data)
      this.router.navigate(['evento']);
     
    })
  }
  salir() {
    this.router.navigate(['evento']);
  }



}
