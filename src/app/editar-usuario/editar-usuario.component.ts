import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { usuarioIDI } from '../../app/modelos/usuario.interface';
import { UsuariosService } from '../../app/servicios/usuarios/usuarios.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validator, NgForm, Validators } from '@angular/forms';
import { ResponseI } from '../modelos/response.interface'

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  usuarioID = this.activerouter.snapshot.paramMap.get('id');
  constructor(private activerouter: ActivatedRoute, private router: Router, private api: UsuariosService) { }
  datosUsuario!: usuarioIDI;

  editarForm = new FormGroup({
    idUsuario: new FormControl(0),
    nombreUsuario: new FormControl(''),
    emailUsuario: new FormControl(''),
    telefono: new FormControl('')

  });



  ngOnInit(): void {

    console.log(this.usuarioID)
    this.api.getSingleUsuario(this.usuarioID).subscribe(data => {
      this.datosUsuario = data;
      console.log(data);
      this.editarForm.setValue({
        'idUsuario': this.datosUsuario.idUsuario,
        'nombreUsuario': this.datosUsuario.nombreUsuario,
        'emailUsuario': this.datosUsuario.emailUsuario,
        'telefono': this.datosUsuario.telefono
      });
      console.log(this.editarForm.value);

    })

  }



  putForm(form: any) {
    this.api.putUser(form).subscribe(data => {
      console.log("Datos editados: ", form)
      this.router.navigate(['usuario']);
    })
  }


  eliminar() {
    let datos: any = this.editarForm.value;
    this.api.deletUser(datos).subscribe(data => {
      this.router.navigate(['usuario']);
      console.log(data)
    })
  }
  salir() {
    this.router.navigate(['usuario']);
  }


}