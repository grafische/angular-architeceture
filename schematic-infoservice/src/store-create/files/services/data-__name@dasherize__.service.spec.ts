import { TestBed } from '@angular/core/testing';

import { Data<%= classify(name) %>Service } from './data-<%= dasherize(name) %>.service';

describe('Data<%= classify(name) %>Service', () => {
  let service: Data<%= classify(name) %>Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Data<%= classify(name) %>Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
