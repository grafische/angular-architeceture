import { Menu } from './../../../shared/models/menu.model';
import { Component, OnInit, Input } from '@angular/core';
import { menu_data } from '../../menu.data';

@Component({
  selector: 'app-header-list-menu',
  templateUrl: './header-list-menu.component.html',
  styleUrls: ['./header-list-menu.component.scss']
})
export class HeaderListMenuComponent {
  @Input() data: Menu[] = menu_data;
  @Input() customClass: string;
}
