import { TestBed } from '@angular/core/testing';

import { CapitalBalanceProjectionService } from './capital-balance-projection.service';

describe('CapitalBalanceProjectionService', () => {
  let service: CapitalBalanceProjectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapitalBalanceProjectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
