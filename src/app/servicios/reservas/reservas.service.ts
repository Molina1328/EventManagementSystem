import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {reservaI} from '../../modelos/ListaReservas.interface';
import {reservaIn} from '../../modelos/reserva.interface';
import { ResponseI } from '../../modelos/response.interface';
import { usuarioI } from 'src/app/modelos/ListaUsuario.interface';
@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  url: string = "http://192.168.56.1:86/Reservaciones"
  url2: string = "http://192.168.56.1:86/Usuarios/"
  url3: string = "http://192.168.56.1:86/"

  constructor(private http: HttpClient) {
  }
  getAllRes(): Observable<reservaI[]> {
    let direccion = this.url;
    return this.http.get<reservaI[]>(direccion);
  }
  getSingleRes(id:any):Observable<reservaIn>{
    let direccion = this.url3 + "Reservaciones/"+ id;
    return this.http.get<reservaIn>(direccion);
  }

  postRes(form:reservaIn):Observable<ResponseI>{
    let direccion = this.url; 
    return this.http.post<ResponseI>(direccion, form);
  }

  putRes(form:reservaIn):Observable<ResponseI>{
    let direccion = this.url3 + "Reservaciones/" + form.idReservacion; 
    return this.http.put<ResponseI>(direccion, form);
  }



  deletRes(form:reservaIn):Observable<ResponseI>{
    let direccion = this.url3 + "Reservaciones/" + form.idReservacion;
    let options = {
      headers: new HttpHeaders({
        'Conten-type': 'application/json'
      }),
      body:form
    }
    return this.http.delete<ResponseI>(direccion, options);

  }



}
