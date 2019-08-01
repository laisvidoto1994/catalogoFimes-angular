import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';
import { DetalhamentoFilmeComponent } from './detalhamento-filme/detalhamento-filme.component';

const APP_ROUTES: Routes = [
    //{ path: '', component: AppComponent },
    { path: 'lista', component: ListagemFilmesComponent },
   // { path: 'detalhe', component: DetalhamentoFilmeComponent }
];

// rotas raiz do projeto
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);