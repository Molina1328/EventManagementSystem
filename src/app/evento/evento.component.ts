import { Component } from '@angular/core';
import {EventosService} from '../servicios/eventos/eventos.service';
import {eventoI} from '../../app/modelos/ListaEventos.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {

  evento!: eventoI[];
  constructor(private api: EventosService, private router:Router){

  }
  ngOnInit(): void {
    this.api.getAllEve().subscribe(data =>{
     this.evento = data;
    })
  }

  editarEvento(id: any){
    this.router.navigate(['editarE', id]);
  }
  nuevoEvento(){
    this.router.navigate(['nuevoE'])
  }
}
