import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSalesComponent } from './create-sales/create-sales.component';
import { Router } from 'express';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CreateSalesComponent },
  { path: 'create-sales', component: CreateSalesComponent }
];

@NgModule({
  declarations: [
    CreateSalesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SalesModule { }
