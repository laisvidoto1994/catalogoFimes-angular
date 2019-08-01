import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsultaFilmesService } from '../servico-filmes/consulta-filmes.service';

@Component({
  selector: 'app-detalhamento-filme',
  templateUrl: './detalhamento-filme.component.html',
  styleUrls: ['./detalhamento-filme.component.css']
})

export class DetalhamentoFilmeComponent implements OnInit {

  @Input('nome') valor: number = 550;
  numero = 550;

  numero1: number = 550;

  titulo: string;
  titulo2: string;
  id: number;
  resumo: string;
  imagem: string;
  lingua: string;
  dataLancamento: string;

  constructor(
    private http: HttpClient,
    private filmeServico: ConsultaFilmesService
  ) { }

  ngOnInit() {

    this.filmeServico.emitirFilme.subscribe(dado => {

      this.numero1 = dado;
      console.log(this.numero1)

      this.filmeServico.buscaUnicoFilme(this.numero1).subscribe(dados => {

        console.log(dados);

        this.titulo = dados.original_title;
        this.id = dados.id;
        this.resumo = dados.overview;
        this.imagem = dados.poster_path;
        this.lingua = dados.original_language;
        this.titulo2 = dados.title;
        this.dataLancamento = dados.release_date;
        return dados;
      },
        erro => console.log(erro));

      return dado;

      //final
    });



  }


}
