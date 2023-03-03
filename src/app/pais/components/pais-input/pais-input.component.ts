import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
    selector: 'app-pais-input',
    templateUrl: './pais-input.component.html',
    styles: [
    ]
})
export class PaisInputComponent implements OnInit {

    @Input() placeholder: string = "";

    @Output() onEnter: EventEmitter<string> = new EventEmitter();//el @Output nos sirve para crear un EventEmmiter que no es mas que un objeto
    //que al llamar su metodo emit nos va a generar un evento enviando el dato que queremos, en este caso sera un string que pusimos entre<> ya
    //que el EventEmmiter es de tipo generico, de esta forma podemos "capturar" el evento en otro lugar y responder a el de a;guna forma

    @Output() onDebounce: EventEmitter<string> = new EventEmitter();

    debouncer$: Subject<string> = new Subject();//creamos un observable para poder manejar sus emisiones cuando se presine una tecla en el input
    //pero al ser un ocservable con el operador debounceTime podemos esperar a que el usuario deje de escribir por x segundos antes de emitir

    termino: string = "";//esto lo manejamos desde el template con el ngModel

    ngOnInit(): void {//ngOnInit se dispara una sola vez cuando el componente es creado y ya esta inicializado
        this.debouncer$
            .pipe(
                debounceTime(300)//este operador hace que no se emita nada hasta transcurrido el tiempo especificado sin que el observable emita,
                //pasaso este tiempo, se emitira el ultimo valor que emitio el observable
            )
            .subscribe((valor) => this.onDebounce.emit(valor));//nos subscribimos al debouncer, lo pusimos en el ngOnInit porque si lo ponemos fuera
        //se estaria subscribiendo al debouncer cada ver que se actualize el componente, de esta forma lo hace solo una vez

    }

    buscar() {
        this.onEnter.emit(this.termino);
    };

    teclaPresionada() { //esto es llamado desde el evento input en el Input
        this.debouncer$.next(this.termino);
    }


}
