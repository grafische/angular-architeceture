import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DepartmentVacationsEffects } from './department-vacations.effects';

describe('DepartmentVacationsEffects', () => {
  let actions$: Observable<any>;
  let effects: DepartmentVacationsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DepartmentVacationsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DepartmentVacationsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});


