import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GlitterPage } from './glitter.page';
import { GlitterRoutingModule } from './glitter-routing.module';

@NgModule({
  declarations: [GlitterPage],
  imports: [GlitterRoutingModule, SharedModule],
})
export class GlitterModule {}
