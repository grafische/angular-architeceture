import { Department } from './../../../core/model/department.model';
import { Vacation } from './../../../core/model/vacation.model';
import { AfterViewInit, Component, OnInit, ViewChild, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { VacationsListDataSource} from './vacations-list-datasource';
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
export class VacationsListComponent implements AfterViewInit, OnInit {
  @Input() dataList: Vacation[];
  @Input() departmentList: Department[];
  @Input() typesList: VacationType[];

  @Output() delete = new EventEmitter();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Vacation>;

  dataSource = new MatTableDataSource<Vacation>();
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [ 'employeeName', 'departmentName', 'startDate', 'contact', 'kindAC', 'remove'];
  searchField: string;
  buttonCheckStateAk: boolean = false;
  buttonCheckStatePl: boolean;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Vacation>(this.dataList);
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
    (value)? this.applyFilter(VACATION_CURRENT) : this.applyFilter('');
  }

  applyFilterPL(value: boolean):void {
    (value)? this.applyFilter(VACATION_PLANNED) : this.applyFilter('');
  }

  applyFilter(value: string) {
    const filterValue = value;
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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    //this.table.dataSource = this.dataSource;
  }
}


export interface PeriodicElement {
  employeeName: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA2: PeriodicElement[] = [
  { employeeName: 'Hydrogen DS', weight: 1.0079, symbol: 'H'},
  { employeeName: 'Helium sas', weight: 4.0026, symbol: 'He'},
  {employeeName: 'Lithium asdsad', weight: 6.941, symbol: 'Li'},
  { employeeName: 'Beryllium adas', weight: 9.0122, symbol: 'Be'},
  { employeeName: 'Boron sadas', weight: 10.811, symbol: 'B'},
];

const ELEMENT_DATA: Vacation[] = [
  {
    leaveId: 37744,
    employeeId: 185,
    employeeName: 'Natalia Knapik',
    employeeLogin: 'natalia',
    leaveTypeId: 4,
    startDate: new Date(),
    endDate: new Date(),
    contact: '',
    remarks: null,
    departmentId: 35,
    departmentName: 'Dział reklamy i promocji',
    kindAC: 'aktualny'
  },
  {
    leaveId: 42478,
    employeeId: 162,
    employeeName: 'Aleksandra Machalska',
    employeeLogin: 'aleksandra',
    leaveTypeId: 4,
    startDate: new Date(),
    endDate: new Date(),
    contact: '',
    remarks: null,
    departmentId: 2,
    departmentName: 'Dział handlowy i sekretariat',
    kindAC: 'aktualny'
  },
];
