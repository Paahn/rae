import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GluePage } from './glue.page';
import { CraftingRecipesRoutes } from '../../crafting-recipes.routes';

const routes: Routes = [
  {
    path: '',
    component: GluePage,
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
export class GlueRoutingModule {}
