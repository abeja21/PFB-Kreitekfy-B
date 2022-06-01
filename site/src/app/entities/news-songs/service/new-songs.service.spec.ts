import { TestBed } from '@angular/core/testing';

import { NewSongsService } from './new-songs.service';

describe('NewSongsService', () => {
  let service: NewSongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewSongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
