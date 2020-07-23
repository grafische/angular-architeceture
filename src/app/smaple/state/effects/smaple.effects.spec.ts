import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SmapleEffects } from './smaple.effects';

describe('SmapleEffects', () => {
  let actions$: Observable<any>;
  let effects: SmapleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SmapleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SmapleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
