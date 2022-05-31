import { TestBed } from '@angular/core/testing';

import { NewsSongsService } from './news-songs.service';

describe('NewsSongsService', () => {
  let service: NewsSongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsSongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
