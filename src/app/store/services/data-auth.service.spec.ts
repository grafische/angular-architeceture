import { TestBed } from '@angular/core/testing';

import { DataAuthService } from './data-auth.service';

describe('DataAuthService', () => {
  let service: DataAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAuthService);
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