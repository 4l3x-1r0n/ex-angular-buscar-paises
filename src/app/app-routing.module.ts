import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path: '', //el path la pagina de inicio de nuestra app, si lo sejamos vacio es la url base de nuestra app en este caso es localhost:4200
        component: PorPaisComponent, //este es el componente que se va a mostrar en esa ruta(tienen que existir las importaciones y exportaciones respectivas)
        pathMatch: 'full', //esto es para indicar que queremos esta ruta especifica
    },
    {
        path: 'region',
        component: PorRegionComponent,
    },
    {
        path: 'capital',
        component: PorCapitalComponent,
    },
    {
        path: 'alpha/:id', //esto es para admitir argumentos, si ponemos en la rireccion localhost:4200/pais/123    el argumento es 123 y se tratara como id, que fue lo que le indicamos, esto sve a la hora de usar el ActivatedRoute que no ssirve para suscribirnos a las rutas y que recibira el parametro como {id: valor}
        component: VerPaisComponent,
    },
    {
        path: '**', //para cualquier otra ruta que no exista
        redirectTo: '', //podemos redireccionar a una pagina
        // component:  404Component//o mostrar un componente
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], //importamos el RouterModule indicandole nuestro arreglo de rutas
    exports: [RouterModule],
})
export class AppRoutingModule { }
