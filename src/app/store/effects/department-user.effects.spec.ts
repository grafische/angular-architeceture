import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DepartmentUserEffects } from './department-user.effects';

describe('DepartmentUserEffects', () => {
  let actions$: Observable<any>;
  let effects: DepartmentUserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DepartmentUserEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DepartmentUserEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});


