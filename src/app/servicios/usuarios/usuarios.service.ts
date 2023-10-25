import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuarioI } from '../../modelos/ListaUsuario.interface';
import { ResponseI } from '../../modelos/response.interface';
import {usuarioIDI} from '../../modelos/usuario.interface';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url: string = "http://192.168.56.1:86/Usuarios"
  url2: string = "http://192.168.56.1:86/"
  constructor(private http: HttpClient) {
  }
  getAllUser(): Observable<usuarioI[]> {
    let direccion = this.url;
    return this.http.get<usuarioI[]>(direccion);
  }
  getSingleUsuario(id:any):Observable<usuarioIDI>{
    let direccion = this.url2 + "Usuarios/"+ id;
    return this.http.get<usuarioIDI>(direccion);
  }
  postUser(form:usuarioIDI):Observable<ResponseI>{
    let direccion = this.url; 
    return this.http.post<ResponseI>(direccion, form);
  }

  putUser(form:usuarioIDI):Observable<ResponseI>{
    let direccion = this.url2 + "Usuarios/" + form.idUsuario; 

    return this.http.put<ResponseI>(direccion, form);
  }

  deletUser(form:usuarioIDI):Observable<ResponseI>{
    let direccion = this.url2 + "Usuarios/" + form.idUsuario;
    let options = {
      headers: new HttpHeaders({
        'Conten-type': 'application/json'
      }),
      body:form
    }
    return this.http.delete<ResponseI>(direccion, options);

  }
}
