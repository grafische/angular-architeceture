import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DepartmentOwnEffects } from './department-own.effects';

describe('DepartmentOwnEffects', () => {
  let actions$: Observable<any>;
  let effects: DepartmentOwnEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DepartmentOwnEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DepartmentOwnEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});


