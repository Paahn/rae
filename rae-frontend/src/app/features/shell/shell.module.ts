import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ShellRoutingModule } from './shell-routing.module';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';

@NgModule({
  declarations: [PageDashboardComponent],
  imports: [SharedModule, ShellRoutingModule],
})
export class ShellModule {}
