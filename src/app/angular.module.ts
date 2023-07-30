import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const modules = [
  BrowserModule,
  BrowserAnimationsModule,
];

@NgModule({
  imports: modules,
  exports: modules
})
export class AngularModule { }
