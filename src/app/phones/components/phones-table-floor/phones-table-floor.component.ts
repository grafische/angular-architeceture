import { ColumnPhones } from './../../../core/class/column-phones.class';
import { PhoneColumnName } from './../../../core/enum/phone-column-name.enum';
import { FloorsName } from './../../../core/enum/floors-name.enum';
import { Component, Input, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserFlat } from './../../../core/model/user.model';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-phones-table-floor',
  templateUrl: './phones-table-floor.component.html',
  styleUrls: ['./phones-table-floor.component.scss']
})
export class PhonesTableFloorComponent implements OnInit {

  @Input() nameFloor: FloorsName;
  @Input() users: UserFlat[];
  displayedColumns: string[] = ['room', 'departmentName', 'name_surname', 'phoneNumber', 'mobilePhoneNumber'];
  columnsToDisplay: string[] = [...this.displayedColumns];
  dataSource: MatTableDataSource<UserFlat>;
  phoneColumnName = PhoneColumnName;
  columnPhones: ColumnPhones = new ColumnPhones(true, true, true, true, true);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.users);
  }

  showColumns(ev: MatCheckboxChange) {
    const elementIdx = this.displayedColumns.indexOf(ev.source.name);
    if( elementIdx > 0 && !ev.checked) this.columnsToDisplay.splice(elementIdx, 1);
    if( elementIdx > 0 && ev.checked) this.columnsToDisplay.splice( elementIdx, 0, ev.source.name );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
