import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GluePage } from './glue.page';
import { GlueRoutingModule } from './glue-routing.module';

@NgModule({
  declarations: [GluePage],
  imports: [GlueRoutingModule, SharedModule],
})
export class GlueModule {}
