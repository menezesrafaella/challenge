import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DividerModule,
    ScrollPanelModule
  ],
  exports: [
    TableModule,
    ButtonModule,
    DividerModule,
    ScrollPanelModule
  ]
})
export class PrimengModule { }
