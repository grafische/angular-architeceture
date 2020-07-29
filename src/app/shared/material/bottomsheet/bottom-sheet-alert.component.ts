import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-alert',
  templateUrl: './bottom-sheet-alert.component.html',
  styleUrls: ['./bottom-sheet-alert.component.scss']
})
export class BottomSheetAlertComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
