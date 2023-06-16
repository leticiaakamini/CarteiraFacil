import { TestBed } from '@angular/core/testing';

import { DesejoService } from './desejo.service';

describe('DesejoService', () => {
  let service: DesejoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesejoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
