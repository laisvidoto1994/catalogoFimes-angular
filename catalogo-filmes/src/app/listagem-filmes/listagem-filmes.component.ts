import { Component, OnInit, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsultaFilmesService } from '../servico-filmes/consulta-filmes.service';

@Component({
  selector: 'app-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.css']
})
export class ListagemFilmesComponent implements OnInit {

  //array
  filmes: string[] = [];
  arr: Object[] = [];

  nomeDoCurso: string = '';


  constructor(
    private http: HttpClient,
    private filmeServico: ConsultaFilmesService

  ) { }

  ngOnInit() {
    // servico de busca de filmes
    this.filmeServico.buscaTodosFilmes().subscribe(dados => {

      for (let index = 0; index < dados.results.length; index++) {
        const element = dados.results[index];

        this.arr['titulo'] = element.original_title;
        this.arr['id'] = element.id;
        this.arr['capa'] = element.poster_path;

        this.filmes.push([
          this.arr['titulo'],
          this.arr['id'],
          this.arr['capa']
        ]);

      }
      console.log(this.filmes[0][2]);
      return dados;
    },
      erro => console.log(erro));
  }

  // buscar detalhe do filme
  public consultarFilme(filme): void {
    //console.log(filme)
    this.nomeDoCurso = filme;
    this.filmeServico.emitirFilme.emit(filme);
  }









}
