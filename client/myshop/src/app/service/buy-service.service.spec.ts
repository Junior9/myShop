import { TestBed } from '@angular/core/testing';

import { BuyServiceService } from './buy-service.service';

describe('BuyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyServiceService = TestBed.get(BuyServiceService);
    expect(service).toBeTruthy();
  });
});
