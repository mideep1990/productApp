import { TestBed } from '@angular/core/testing';

import { ProductEntryServiceService } from './product-entry-service.service';

describe('ProductEntryServiceService', () => {
  let service: ProductEntryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductEntryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
