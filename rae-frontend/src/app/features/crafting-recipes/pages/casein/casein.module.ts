import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CaseinPage } from './casein.page';
import { CaseinRoutingModule } from './casein-routing.module';

@NgModule({
  declarations: [CaseinPage],
  imports: [CaseinRoutingModule, SharedModule],
})
export class CaseinModule {}
