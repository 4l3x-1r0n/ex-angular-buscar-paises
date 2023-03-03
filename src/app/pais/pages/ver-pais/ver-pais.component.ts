import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-ver-pais',
    templateUrl: './ver-pais.component.html',
    styles: [
    ]
})
export class VerPaisComponent implements OnInit {

    pais!: Pais;

    constructor(
        private activatedRoute: ActivatedRoute,
        private paisService: PaisService
    ) { }

    ngOnInit(): void {
        // this.activatedRoute.params//hasta aqui devuelve un observable al cual nos podemos subscribir, si no usamos ningun
        //     //operador nos devuelve en este caso { id: valor }, este id viene desde el modulo donde creamos las rutas(app-routin.module.ts)
        //     .subscribe(({ id }) => {//aqui usamos la desturcturacion para obtener el id
        //         console.log(id)
        //         this.paisService.getPaisPorAlpha(id).subscribe(console.log)
        //     });
        this.activatedRoute.params
            .pipe(
                switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
                map((pais) => pais[0])
            )
            .subscribe({
                next: (pais) => this.pais = pais,
            });



    }

}
