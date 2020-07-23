import { TestBed } from '@angular/core/testing';

import { SmapleService } from './smaple.service';

describe('SmapleService', () => {
  let service: SmapleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmapleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
