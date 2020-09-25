import { TestBed } from '@angular/core/testing';

import { DataDepartmentOwnService } from './data-department-own.service';

describe('DataDepartmentOwnService', () => {
  let service: DataDepartmentOwnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataDepartmentOwnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
