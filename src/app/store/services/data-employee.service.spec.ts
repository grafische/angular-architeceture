import { TestBed } from '@angular/core/testing';

import { DataEmployeeService } from './data-employee.service';

describe('DataEmployeeService', () => {
  let service: DataEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
