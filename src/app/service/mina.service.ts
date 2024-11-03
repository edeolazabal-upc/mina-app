import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mina } from '../model/mina';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinaService {
  private apiUrl = 'http://localhost:8080/api/mina'; // URL del backend de Spring Boot

  constructor(private http: HttpClient) { }

  // Método para registrar una nueva mina
  registrarMina(mina: Mina): Observable<Mina> {
     if (mina.tonsProducidas == null) mina.tonsProducidas = 0
     return this.http.post<Mina>(`${this.apiUrl}/nuevo`, mina, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
     });
  }

  // Método para listar minas con paginación
  listarMinas(): Observable<Mina[]> {
     return this.http.get<Mina[]>(`${this.apiUrl}`);
  }
}
