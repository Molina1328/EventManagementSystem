import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { eventoIn } from '../modelos/eventos.interface';
import { EventosService } from '../servicios/eventos/eventos.service';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.css']
})
export class NuevoEventoComponent implements OnInit {
  constructor(private api: EventosService, private router: Router) { }
  ngOnInit(): void {

  }
  datosEvento!: eventoIn;

  nuevoForm = new FormGroup({
    idEvento: new FormControl(0),
    nombreEvento: new FormControl('', Validators.required),
    fechaEvento: new FormControl('', Validators.required),
    lugarEvento: new FormControl('', Validators.required),
    capacidadEvento: new FormControl(0, Validators.required)

  });
  postForm(form: any) {

    this.api.postEve(form).subscribe(data => {
      console.log("Datos nuevos: ", form)
      this.router.navigate(['evento']);
    })

}
salir() {
  this.router.navigate(['evento']);
}
}
