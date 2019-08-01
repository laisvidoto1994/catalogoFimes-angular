import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';
import { DetalhamentoFilmeComponent } from './detalhamento-filme/detalhamento-filme.component';
import { routing } from './app.routing';// arquivo de rotas

@NgModule({
  declarations: [
    AppComponent,
    ListagemFilmesComponent,
    DetalhamentoFilmeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
