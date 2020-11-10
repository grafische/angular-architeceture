import { Component, Input } from '@angular/core';
import { menu } from './../../../core/const/menu.const';
import { Menu } from './../../../shared/models/menu.model';

@Component({
  selector: 'app-header-list-menu',
  templateUrl: './header-list-menu.component.html',
  styleUrls: ['./header-list-menu.component.scss']
})
export class HeaderListMenuComponent {
  @Input() data: Menu[] = menu;
  @Input() customClass: string;
}
