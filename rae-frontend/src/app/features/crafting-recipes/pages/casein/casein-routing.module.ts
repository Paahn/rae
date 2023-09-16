import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseinPage } from './casein.page';
import { CraftingRecipesRoutes } from '../../crafting-recipes.routes';

const routes: Routes = [
  {
    path: '',
    component: CaseinPage,
    data: {
      routes: {
        auth: `/${CraftingRecipesRoutes.MODULE_PATH}`,
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseinRoutingModule {}
