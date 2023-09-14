import { NgModule } from '@angular/core';
import { AboutPage } from './about.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AboutPage],
  imports: [SharedModule],
})
export class AboutModule {}
