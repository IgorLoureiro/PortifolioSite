import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { SkillPageComponent } from './paginas/skill-page/skill-page.component';

export const routes: Routes = [
    { path: '', component: PaginaPrincipalComponent},
    {path: 'skills', component: SkillPageComponent},
    {path: '**', redirectTo: ''}
];
