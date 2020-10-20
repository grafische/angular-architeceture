import { FormMode } from './../../../core/model/form-mode.enum';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as SelectorsDepartment from '../../../store/selectors/department.selectors';
import { Department } from './../../../core/model/department.model';
import { State } from './../../../store';

@Component({
  selector: 'app-cards-add',
  templateUrl: './cards-add.component.html',
  styleUrls: ['./cards-add.component.scss']
})
export class CardsAddComponent implements OnInit {

  departmentsType$: Observable<Department[]>;
  formMode = FormMode;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.departmentsType$ = this.store.select(SelectorsDepartment.selectAllDepartment);
  }

}
