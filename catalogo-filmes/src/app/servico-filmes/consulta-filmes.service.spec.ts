import { TestBed } from '@angular/core/testing';

import { ConsultaFilmesService } from './consulta-filmes.service';

describe('ConsultaFilmesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaFilmesService = TestBed.get(ConsultaFilmesService);
    expect(service).toBeTruthy();
  });
});
