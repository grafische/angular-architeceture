import { Component, Input, OnInit } from '@angular/core';

import { DepartmentUser } from './../../../core/model/department-user.model';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  @Input() departments: DepartmentUser[];
  @Input() filterEmployee: string;
  @Input() filterDepartment: string;

  constructor() { }

  ngOnInit(): void {
  }

}
