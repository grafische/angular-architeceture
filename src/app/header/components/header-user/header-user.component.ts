import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent implements OnInit {

  @HostBinding('class') className = 'row justify-content-end';

  constructor() { }

  ngOnInit(): void {
  }

}
