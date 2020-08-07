import { TestBed } from '@angular/core/testing';

import { DataVacationService } from './data-vacation.service';

describe('DataVacationService', () => {
  let service: DataVacationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataVacationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
