import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-por-pais',
    templateUrl: './por-pais.component.html',
    styles: [
        `
        li{
            cursor:pointer
        }
        `
    ],
})
export class PorPaisComponent {
    constructor(private paisService: PaisService)//inyectamos la dependencia del paisService
    { }

    termino: string = "";
    hayError: boolean = false;
    paises: Pais[] = [];
    paisesSugeridos: Pais[] = [];
    mostrarSugerencias: boolean = false;


    buscar(termino: string) {
        this.hayError = false;
        this.termino = termino;
        this.mostrarSugerencias = false;
        this.paisService.buscarPais(this.termino)
            .subscribe({
                next: (resp) => {
                    this.paises = resp;
                    console.log(this.paises);
                },
                error: (error) => {
                    this.hayError = true;
                    this.paises = [];
                }
            });
    }

    sugerencias(termino: string) {
        this.mostrarSugerencias = true;
        this.hayError = false;
        this.termino = termino;

        this.paisService.buscarPais(termino).subscribe({
            next: (paises) => this.paisesSugeridos = paises.splice(0, 5),
            error: (error) => this.paisesSugeridos = []
        });
    }

    buscarSugerido(termino: string) {
        this.buscar(termino);
    }
}
