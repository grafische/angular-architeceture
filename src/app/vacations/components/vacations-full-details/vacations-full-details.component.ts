import { Message } from './../../../core/model/message.enum';
import { VacationType } from './../../../core/model/vacation-type.model';
import { DepartmentVacationsLeave, DepartmentVacations } from './../../../core/model/department-vacations.model';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-vacations-full-details',
  templateUrl: './vacations-full-details.component.html',
  styleUrls: ['./vacations-full-details.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class VacationsFullDetailsComponent implements OnInit {

  @Input() list: DepartmentVacations;
  @Input() type: VacationType[];
  displayedColumns: string[] = ['name', 'data'];
  message = Message;

  constructor() { }

  ngOnInit(): void {
  }

}
