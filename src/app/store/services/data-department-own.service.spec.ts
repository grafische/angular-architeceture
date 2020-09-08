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