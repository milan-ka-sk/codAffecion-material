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
    Mat.MatFormFieldModule
  ],
  exports: [
    Mat.MatToolbarModule,
    Mat.MatGridListModule,
    Mat.MatInputModule,
    Mat.MatFormFieldModule
  ]
})
export class MaterialModule { }
