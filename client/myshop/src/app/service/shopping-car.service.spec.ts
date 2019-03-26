import { TestBed } from '@angular/core/testing';

import { ShoppingCarService } from './shopping-car.service';

describe('ShoppingCarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingCarService = TestBed.get(ShoppingCarService);
    expect(service).toBeTruthy();
  });
});
