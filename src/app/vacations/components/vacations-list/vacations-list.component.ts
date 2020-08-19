import { Department } from './../../../core/model/department.model';
import { Vacation } from './../../../core/model/vacation.model';
import { AfterViewInit, Component, OnInit, ViewChild, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { VacationsListDataSource, VacationsListItem } from './vacations-list-datasource';
import { filter } from 'rxjs/operators';
import { VacationType } from 'src/app/core/model/vacation-type.model';

const VACATION_CURRENT: string = "aktualny";
const VACATION_PLANNED: string = "planowany";

@Component({
  selector: 'app-vacations-list',
  templateUrl: './vacations-list.component.html',
  styleUrls: ['./vacations-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VacationsListComponent implements AfterViewInit, OnInit, OnChanges {
  @Input() dataList: VacationsListItem[];
  @Input() departmentList: Department[];
  @Input() typesList: VacationType[];

  @Output() delete = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<VacationsListItem>;
  //dataSource: VacationsListDataSource = new VacationsListDataSource( [] );
  dataSource = new MatTableDataSource<Vacation>(this.dataList);
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [ 'name', 'department', 'date_vacation', 'contact', 'kind', 'remove'];
  searchField: string;
  buttonCheckStateAk: boolean = false;
  buttonCheckStatePl: boolean;

  ngOnInit() {
    this.dataSource.data = this.dataList;
    console.info("this.dataList ngoninit");
    console.info(this.dataList);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.info("this.dataList ngOnChanges");
    console.info(changes.dataList);
    if(changes.dataList && changes.dataList.currentValue.length > 0) {
      this.dataSource.data = changes.dataList.currentValue;
    }
  }

  filterAk():void {
    if(this.buttonCheckStateAk == true) {
      this.buttonCheckStateAk = false;
      this.applyFilterAK(this.buttonCheckStateAk);
    } else {
      this.buttonCheckStateAk = true;
      this.applyFilterAK(this.buttonCheckStateAk);
    }
  }

  filterPl():void {
    if(this.buttonCheckStatePl == true) {
      this.buttonCheckStatePl = false;
      this.applyFilterPL(this.buttonCheckStatePl);
    } else {
      this.buttonCheckStatePl = true;
      this.applyFilterPL(this.buttonCheckStatePl);
    }
  }

  applyFilterAK(value: boolean):void {
    console.info("applyFilterAK");
    (value)? this.applyFilter(VACATION_CURRENT) : this.applyFilter('');
  }

  applyFilterPL(value: boolean):void {
    (value)? this.applyFilter(VACATION_PLANNED) : this.applyFilter('');
  }

  applyFilter(value: string) {
    const filterValue = value;
    console.info("applyFilter send");
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  checkCurrentVacation(dataStart: Date, dataEnd: Date): boolean {
    const currentDate: Date = new Date();
    const current = (new Date(dataStart).getTime() <= currentDate.getTime() && new Date(dataEnd).getTime() >= new Date(dataEnd).getTime())? true : false;
    return current;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
