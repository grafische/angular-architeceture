import { TestBed } from '@angular/core/testing';

import { DataDepartmentVacationsService } from './data-department-vacations.service';

describe('DataDepartmentVacationsService', () => {
  let service: DataDepartmentVacationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataDepartmentVacationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
