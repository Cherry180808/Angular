/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Cart.service.tsService } from './cart.service.ts.service';

describe('Service: Cart.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Cart.service.tsService]
    });
  });

  it('should ...', inject([Cart.service.tsService], (service: Cart.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});
