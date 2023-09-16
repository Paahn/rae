import { NgModule } from '@angular/core';
import { AboutPage } from './about.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [AboutPage],
  imports: [AboutRoutingModule, SharedModule],
})
export class AboutModule {}
