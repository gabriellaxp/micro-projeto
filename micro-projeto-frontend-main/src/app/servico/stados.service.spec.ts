import { TestBed } from '@angular/core/testing';

import { StadosService } from './stados.service';

describe('StadosService', () => {
  let service: StadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
