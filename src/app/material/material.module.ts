import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Mat from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    Mat.MatToolbarModule,
    Mat.MatGridListModule,
    Mat.MatInputModule,
    Mat.MatFormFieldModule,
    Mat.MatRadioModule,
    Mat.MatSelectModule,
    Mat.MatDatepickerModule,
    Mat.MatNativeDateModule,
    Mat.MatCheckboxModule,
    Mat.MatButtonModule,
    Mat.MatSnackBarModule,
    Mat.MatTableModule,
    Mat.MatIconModule
  ],
  exports: [
    Mat.MatToolbarModule,
    Mat.MatGridListModule,
    Mat.MatInputModule,
    Mat.MatFormFieldModule,
    Mat.MatRadioModule,
    Mat.MatSelectModule,
    Mat.MatDatepickerModule,
    Mat.MatNativeDateModule,
    Mat.MatCheckboxModule,
    Mat.MatButtonModule,
    Mat.MatSnackBarModule,
    Mat.MatTableModule,
    Mat.MatIconModule
  ]
})
export class MaterialModule { }
