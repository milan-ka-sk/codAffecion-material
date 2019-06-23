import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Mat from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    Mat.MatToolbarModule
  ],
  exports: [
    Mat.MatToolbarModule
  ]
})
export class MaterialModule { }
