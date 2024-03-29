import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-por-capital',
    templateUrl: './por-capital.component.html',
    styles: [],
})
export class PorCapitalComponent {
    constructor(private paisService: PaisService) { }

    termino: string = "";
    hayError: boolean = false;
    paises: Pais[] = [];

    buscar(termino: string) {
        this.hayError = false;
        this.termino = termino;
        this.paisService.buscarCapital(this.termino)
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

}
