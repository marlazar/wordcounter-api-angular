import { TestBed } from '@angular/core/testing';

import { WordcounterApiService } from './wordcounter-api.service';

describe('WordcounterApiService', () => {
  let service: WordcounterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordcounterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
