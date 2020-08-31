import { TestBed } from '@angular/core/testing';

import { DataDepartmentUserService } from './data-department-user.service';

describe('DataDepartmentUserService', () => {
  let service: DataDepartmentUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataDepartmentUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

