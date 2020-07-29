import { Component, OnInit, Input } from '@angular/core';
import { User } from './../../../core/model/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input() users: User[];

}
