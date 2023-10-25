import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { eventoI } from '../../modelos/ListaEventos.interface';
import { ResponseI } from '../../modelos/response.interface';
import { eventoIn } from 'src/app/modelos/eventos.interface';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  url: string = "http://192.168.56.1:86/Eventos"
  url2: string = "http://192.168.56.1:86/"
  constructor(private http: HttpClient) {
  }
  getAllEve(): Observable<eventoI[]> {
    let direccion = this.url;
    return this.http.get<eventoI[]>(direccion);
  }

  getSingleEve(id: any): Observable<eventoIn> {
    let direccion = this.url2 + "Eventos/" + id;
    return this.http.get<eventoIn>(direccion);
  }

  postEve(form: eventoIn): Observable<ResponseI> {
    let direccion = this.url;
    return this.http.post<ResponseI>(direccion, form);
  }

  putEve(form: eventoIn): Observable<ResponseI> {
    let direccion = this.url2 + "Eventos/" + form.idEvento;

    return this.http.put<ResponseI>(direccion, form);
  }
  deletEve(form: eventoIn): Observable<ResponseI> {
    let direccion = this.url2 + "Eventos/" + form.idEvento;
    let options = {
      headers: new HttpHeaders({
        'Conten-type': 'application/json'
      }),
      body: form
    }
    return this.http.delete<ResponseI>(direccion, options);

  }

}
