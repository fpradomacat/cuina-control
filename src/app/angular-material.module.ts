import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCommonModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';

const modules = [
  MatTableModule,
  MatCommonModule,
  MatButtonModule,
  MatButtonToggleModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class AngularMaterialModule { }
