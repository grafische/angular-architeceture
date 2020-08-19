import { TestBed } from '@angular/core/testing';

import { DataVacationTypeService } from './data-vacation-type.service';

describe('DataVacationTypeService', () => {
  let service: DataVacationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataVacationTypeService);
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