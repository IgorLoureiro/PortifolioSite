import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';

export const routes: Routes = [
    { path: '', component: PaginaPrincipalComponent},
    {path: '**', redirectTo: ''}
];
