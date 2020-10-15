import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentUser } from './../../../core/model/department-user.model';
import { User } from './../../../core/model/user.model';

@Component({
  selector: 'app-cards-employees',
  templateUrl: './cards-employees.component.html',
  styleUrls: ['./cards-employees.component.scss']
})
export class CardsEmployeesComponent implements OnInit {

  @Input() employee: User;
  @Input() department: DepartmentUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  details(slug: string): void {
    this.router.navigate([this.department.symbol, slug], {relativeTo: this.activatedRoute });
  }

}
