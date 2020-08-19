import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { VacationTypeEffects } from './vacation-type.effects';

describe('VacationTypeEffects', () => {
  let actions$: Observable<any>;
  let effects: VacationTypeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VacationTypeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(VacationTypeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});


