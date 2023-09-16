import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExhibitsPage } from './exhibits.page';
import { ExhibitsRoutingModule } from './exhibits-routing.module';

@NgModule({
  declarations: [ExhibitsPage],
  imports: [ExhibitsRoutingModule, SharedModule],
})
export class ExhibitsModule {}
