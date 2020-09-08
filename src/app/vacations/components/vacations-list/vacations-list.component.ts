import { AfterViewInit, Component, OnInit, ViewChild, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { VacationsListDataSource} from './vacations-list-datasource';
import { filter } from 'rxjs/operators';
import { Vacation } from './../../../core/model/vacation.model';
import { Department } from './../../../core/model/department.model';
import { User } from './../../../core/model/user.model';
import { VacationType } from '../../../core/model/vacation-type.model';
import { Message } from '../../../core/model/message.enum';

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
  @Input('user') authUser: User;

  @Output() delete = new EventEmitter();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Vacation>;

  dataSource = new MatTableDataSource<Vacation>();
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [ 'employeeName', 'departmentName', 'startDate', 'contact', 'kindAC', 'remove'];
  searchField: string = "";
  buttonCheckStateAk: boolean = false;
  buttonCheckStatePl: boolean = false;
  type:string = "";
  department: string = "";
  message = Message;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Vacation>(this.dataList);//.includes(2)
    this.dataSource.filterPredicate = (data: Vacation, filterValue: string) => {
      const dataFilter = JSON.parse(filterValue);
      return data.kindAC.toLowerCase().includes(dataFilter.kindAC) &&
             data.employeeName.toLowerCase().includes(dataFilter.employeeName) &&
             data.leaveTypeName.toLowerCase().includes(dataFilter.leaveTypeName) &&
             data.departmentName.toLowerCase().includes(dataFilter.departmentName)
    }
 }

  filterAk():void {
    if(this.buttonCheckStateAk == true) {
      this.buttonCheckStateAk = false;
      // this.applyFilterAK(this.buttonCheckStateAk);
    } else {
      this.buttonCheckStateAk = true;
      // this.applyFilterAK(this.buttonCheckStateAk);
    }
    this.applyFilter();
  }

  filterPl():void {
    if(this.buttonCheckStatePl == true) {
      this.buttonCheckStatePl = false;
      // this.applyFilterPL(this.buttonCheckStatePl);
    } else {
      this.buttonCheckStatePl = true;
      // this.applyFilterPL(this.buttonCheckStatePl);
    }
    this.applyFilter();
  }

  // applyFilterAK(value: boolean):void {
  //   (value)? this.applyFilter(Message.VactionCurrent) : this.applyFilter('');
  // }

  // applyFilterPL(value: boolean):void {
  //   (value)? this.applyFilter(Message.VactionPlanned) : this.applyFilter('');
  // }

  checkApplyFilterPlAk():string {
    let selectCurrent: string = "";
    if(this.buttonCheckStateAk) return selectCurrent = Message.VactionCurrent;
    if(this.buttonCheckStatePl) return selectCurrent = Message.VactionPlanned;
    if(!this.buttonCheckStateAk && !this.buttonCheckStatePl || this.buttonCheckStateAk && this.buttonCheckStatePl) return "";
  }

  checkUserRole(id: number):boolean {
    if(this.authUser.roles.includes('ROLE_Maintenance') || this.authUser.roles.includes('ROLE_HR')) return true;

    if(this.authUser.id === id) {
      return true;
    } else {
      return false;
    }
  }

  applyFilter() {

    const filterValues = {
      kindAC: this.checkApplyFilterPlAk().trim().toLowerCase(),
      employeeName: this.searchField.trim().toLowerCase(),
      leaveTypeName: this.type.trim().toLowerCase(),
      departmentName: this.department.trim().toLowerCase()
    };

    this.dataSource.filter = JSON.stringify(filterValues);

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
