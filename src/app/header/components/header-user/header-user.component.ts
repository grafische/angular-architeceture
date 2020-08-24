import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { User } from './../../../core/model/user.model';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent implements OnInit {

  @HostBinding('class') className = 'row justify-content-end';
  @Input('user') userData: User;

  constructor() { }

  ngOnInit(): void {
  }

}
