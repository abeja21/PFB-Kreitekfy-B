import { TestBed } from '@angular/core/testing';

import { BestRatedService } from './best-rated.service';

describe('BestRatedService', () => {
  let service: BestRatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestRatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
