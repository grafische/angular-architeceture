import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { <%= classify(name) %>Effects } from './<%= dasherize(name) %>.effects';

describe('<%= classify(name) %>Effects', () => {
  let actions$: Observable<any>;
  let effects: <%= classify(name) %>Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        <%= classify(name) %>Effects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(<%= classify(name) %>Effects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});


// import { TestBed } from '@angular/core/testing';
// import { provideMockActions } from '@ngrx/effects/testing';
// import { Observable } from 'rxjs';

// import { DepartmentEffects } from './department.effects';

// describe('DepartmentEffects', () => {
//   let actions$: Observable<any>;
//   let effects: DepartmentEffects;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         DepartmentEffects,
//         provideMockActions(() => actions$)
//       ]
//     });

//     effects = TestBed.inject(DepartmentEffects);
//   });

//   it('should be created', () => {
//     expect(effects).toBeTruthy();
//   });
// });
