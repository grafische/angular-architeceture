import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PhonesTableFloorsDataSource, PhonesTableFloorsItem } from './phones-table-floors-datasource';

@Component({
  selector: 'app-phones-table-floors',
  templateUrl: './phones-table-floors.component.html',
  styleUrls: ['./phones-table-floors.component.scss']
})
export class PhonesTableFloorsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PhonesTableFloorsItem>;
  dataSource: PhonesTableFloorsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new PhonesTableFloorsDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
