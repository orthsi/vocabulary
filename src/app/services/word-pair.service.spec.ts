import { TestBed } from '@angular/core/testing';

import { WordsPairService } from './word-pair.service';

describe('WordPairService', () => {
  let service: WordsPairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordsPairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
