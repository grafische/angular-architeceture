import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { menu } from './../../../core/const/menu.const';
import { Menu } from './../../../core/model/menu.model';
import { User } from './../../../core/model/user.model';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {

  readonly menu_data: Menu[] = menu;
  @Input() sidenav: MatSidenav;
  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

  openSide(): void {
    this.sidenav.toggle();
  }

}
