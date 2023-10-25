import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validator } from '@angular/forms';
import {UsuariosService} from '../servicios/usuarios/usuarios.service'
import { Router } from '@angular/router';
import {usuarioI} from '../../app/modelos/ListaUsuario.interface'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  usuarios!: usuarioI[];

  constructor(private api: UsuariosService, private router:Router){

  }
 
  ngOnInit(): void {
    this.api.getAllUser().subscribe(data =>{
      this.usuarios=data;
    })
  }

  editarUsuario(id: any){
    this.router.navigate(['editarU', id]);
  }
  nuevoUsuario(){
    this.router.navigate(['nuevoU'])
  }
 

}
