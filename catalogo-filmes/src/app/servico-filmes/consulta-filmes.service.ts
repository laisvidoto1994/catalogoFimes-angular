import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})

export class ConsultaFilmesService {

  constructor(
    private http: HttpClient
  ) { }

  apiKey = 'fc0842ec66aa8c1c93c5dfbabf1d9b8b';


  emitirFilme = new EventEmitter<number>();

  // traz todos os filmes
  buscaTodosFilmes() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key='
      + this.apiKey +
      '&sort_by=popularity.desc');

    return of({});
  }

  // traz um unico filmes
  buscaUnicoFilme(id) {
    console.log(id);
    return this.http.get('https://api.themoviedb.org/3/movie/'
      + id +
      '?api_key=' +
      this.apiKey);

    return of({});
  }

}
