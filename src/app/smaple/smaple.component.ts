import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from './state/reducers/smaple.reducer';
import { Smaple } from '../core/model/smaple.model';
import { Observable } from 'rxjs';

import * as SmapleActions from './state/actions/smaple.actions';
import * as SmapleSelectors from './state/selectors/smaple.selectors';

@Component({
  selector: 'app-smaple',
  templateUrl: './smaple.component.html',
  styleUrls: ['./smaple.component.scss']
})
export class SmapleComponent implements OnInit {
  smaples$: Observable<Smaple[]>;
  smaple$: Observable<Smaple[]>;
  currentSmaple$: Observable<Smaple | null>;
  total$: Observable<number>;
  ids$: Observable<string[] | number[] | object>;
  entities$: Observable<any>;

  constructor(private store: Store<State>) {
    this.smaples$ = store.select(SmapleSelectors.selectAllSmaples);
    this.ids$ = store.select(SmapleSelectors.selectSmapleIds);
    // this.currentSmaple$ = store.select(selectActiveBook);
    this.total$ = store.select(SmapleSelectors.selectSmapleTotal);
    this.entities$ = store.select(SmapleSelectors.selectSmapleEntities);
  }

  ngOnInit(): void {
    this.store.dispatch(SmapleActions.enter());
  }

}
