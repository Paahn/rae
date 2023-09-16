import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExhibitsPage } from './exhibits.page';

const routes: Routes = [
  {
    path: '',
    component: ExhibitsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExhibitsRoutingModule {}
