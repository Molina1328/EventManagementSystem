import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { usuarioIDI } from '../../app/modelos/usuario.interface';
import { UsuariosService } from '../../app/servicios/usuarios/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {


  datosUsuario!: usuarioIDI;

  nuevoForm = new FormGroup({
    idUsuario: new FormControl(0),
    nombreUsuario: new FormControl(''),
    emailUsuario: new FormControl(''),
    telefono: new FormControl('')

  });
  constructor(private api: UsuariosService, private router: Router) { }

  ngOnInit(): void {

  }
  postForm(form: any) {

    this.api.postUser(form).subscribe(data => {
      console.log("Datos nuevos: ", form)
      this.router.navigate(['usuario']);
    })


  }
  salir() {
    this.router.navigate(['usuario']);
  }
}
