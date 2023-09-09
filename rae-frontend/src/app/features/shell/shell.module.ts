import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';


@NgModule({
  declarations: [
    PageDashboardComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule
  ]
})
export class ShellModule { }
