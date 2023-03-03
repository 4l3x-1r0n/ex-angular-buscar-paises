import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
    providedIn: 'root',
})
export class PaisService {
    private apiUrl = 'https://restcountries.com/v3.1'; //name/united
    constructor(private http: HttpClient) { }

    buscarPais(termino: string): Observable<Pais[]> {
        const url = `${this.apiUrl}/name/${termino}`;

        return this.http.get<Pais[]>(url);
    }

    buscarCapital(termino: string): Observable<Pais[]> {
        const url = `${this.apiUrl}/capital/${termino}`;

        return this.http.get<Pais[]>(url);
    }

    getPaisPorAlpha(id: string): Observable<Pais[]> {
        const url = `${this.apiUrl}/alpha/${id}`;

        return this.http.get<Pais[]>(url);
    }

    getPaisPorRegion(region: string): Observable<Pais[]> {

        const httpParams = new HttpParams().set("nombre_parametro", "valor_parametro")//con esto creamos un objeto que contiene todos los
        //parametros que pasamos mediante la url, con le .set podemos agregar el parametro, y podemos ir agregando mas con un .set por cada
        //parametro, luedo se lo pasamos como segundo argumeto al http.get y el se encarga de construir la url con los parametros


        const url = `${this.apiUrl}/region/${region}`;

        return this.http.get<Pais[]>(url);
    }
}
