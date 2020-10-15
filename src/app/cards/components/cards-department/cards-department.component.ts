import { DepartmentUser } from './../../../core/model/department-user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-department',
  templateUrl: './cards-department.component.html',
  styleUrls: ['./cards-department.component.scss']
})
export class CardsDepartmentComponent implements OnInit {

  @Input() department: DepartmentUser;
  @Input() employeesFilter: string;

  constructor() { }

  ngOnInit(): void {
  }

}
