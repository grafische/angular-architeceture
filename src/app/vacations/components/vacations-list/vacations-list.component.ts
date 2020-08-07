import { Vacation } from './../../../core/model/vacation.model';
import { AfterViewInit, Component, OnInit, ViewChild, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { VacationsListDataSource, VacationsListItem } from './vacations-list-datasource';

@Component({
  selector: 'app-vacations-list',
  templateUrl: './vacations-list.component.html',
  styleUrls: ['./vacations-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VacationsListComponent implements AfterViewInit, OnInit, OnChanges {
  @Input() dataList: VacationsListItem[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<VacationsListItem>;
  //dataSource: VacationsListDataSource = new VacationsListDataSource( [] );
  dataSource = new MatTableDataSource<Vacation>(this.dataList);
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [ 'name', 'section', 'date_vacation', 'contact', 'kind', 'remove'];

  ngOnInit() {
    this.dataSource.data = this.dataList;
    console.info("this.dataList ngoninit");
    console.info(this.dataList);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.info("this.dataList ngOnChanges");
    console.info(changes.dataList);
    if(changes.dataList.currentValue.length > 0) {
      this.dataSource.data = changes.dataList.currentValue;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
