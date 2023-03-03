import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';

@Component({
    selector: 'app-pais-tabla',
    templateUrl: './pais-tabla.component.html',
    styles: [
    ]
})


export class PaisTablaComponent {
    @Input() paises: Pais[] = [];//el @input nos sirve para crear una variable que almacenara lo que le enviemos al al componente a la hora de crearlo
    // en este caso la llamda se hace de esta forma <app-pais-tabla [paises]="paises"></app-pais-tabla> si nos fijamos bien le enviamos al componente
    //los paises como si fuera un atributo de un elemento html normal, los [] son para indicar que no es un string lo que se esta mandando sino el
    //valor de una variable que existe en nuestro .ts
}
