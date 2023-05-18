import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Estados } from '../interfaces/states';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class StadosService {

  constructor(private http: HttpClient) { }

  getServicoStados(): Observable<Estados[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*'
      })
    };
    return this.http.get<Estados[]>(`${environment.REST_URL}/estados`, httpOptions)
      .pipe(
        tap({
          error: (error) => console.error(error)
        })
      );
  }
}
