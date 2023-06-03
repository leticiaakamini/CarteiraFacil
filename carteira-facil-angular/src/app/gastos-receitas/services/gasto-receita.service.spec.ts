import { TestBed } from '@angular/core/testing';

import { GastoReceitaService } from './gasto-receita.service';

describe('GastoReceitaService', () => {
  let service: GastoReceitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastoReceitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
