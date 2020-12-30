import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';

import { BottomSheetAlertComponent } from './bottomsheet/bottom-sheet-alert.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [BottomSheetAlertComponent],
  imports: [
    CommonModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatDatepickerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDividerModule,
    MatMenuModule
  ],
  entryComponents: [
    BottomSheetAlertComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pl-PL'},
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatBottomSheetModule,
    BottomSheetAlertComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatDatepickerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDividerModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
