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
 
/* 
import { TestBed } from '@angular/core/testing';

import { DataDepartmentService } from './data-department.service';

describe('DataDepartmentService', () => {
  let service: DataDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

*/