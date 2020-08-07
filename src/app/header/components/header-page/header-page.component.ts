import { Menu } from './../../../shared/models/menu.model';
import { menu_data } from './../../menu.data';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {

  readonly menu_data: Menu[] = menu_data;
  @Input() sidenav: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

  openSide(): void {
    this.sidenav.toggle();
  }

}