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
    Mat.MatSelectModule
  ],
  exports: [
    Mat.MatToolbarModule,
    Mat.MatGridListModule,
    Mat.MatInputModule,
    Mat.MatFormFieldModule,
    Mat.MatRadioModule,
    Mat.MatSelectModule
  ]
})
export class MaterialModule { }