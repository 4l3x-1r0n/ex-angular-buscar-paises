import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styles: [
        `
            /* de esta forma podemos dar estilos a nuestros componentes */
            li {
                cursor: pointer;
            }
        `,
    ],
})
export class SidebarComponent {}
