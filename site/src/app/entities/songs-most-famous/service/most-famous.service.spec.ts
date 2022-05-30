import { TestBed } from '@angular/core/testing';

import { MostFamousService } from './most-famous.service';

describe('MostFamousService', () => {
  let service: MostFamousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostFamousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
