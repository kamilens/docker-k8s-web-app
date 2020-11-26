import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

@NgModule({
  declarations: [
  AuthLayoutComponent,
  MainLayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class SharedModule { }
