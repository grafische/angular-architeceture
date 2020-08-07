import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { VacationEffects } from './vacation.effects';

describe('VacationEffects', () => {
  let actions$: Observable<any>;
  let effects: VacationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VacationEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(VacationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
