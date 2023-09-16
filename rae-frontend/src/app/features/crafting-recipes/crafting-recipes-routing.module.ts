import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CraftingRecipesPage } from './crafting-recipes.page';
import { CraftingRecipesRoutes } from './crafting-recipes.routes';

const routes: Routes = [
  {
    path: CraftingRecipesRoutes.MODULE_PATH,
    component: CraftingRecipesPage,
  },
  {
    path: CraftingRecipesRoutes.GLUE,
    loadChildren: () =>
      import('../crafting-recipes/pages/glue/glue.module').then(
        (m) => m.GlueModule
      ),
  },
  {
    path: CraftingRecipesRoutes.GLITTER,
    loadChildren: () =>
      import('../crafting-recipes/pages/glitter/glitter.module').then(
        (m) => m.GlitterModule
      ),
  },
  {
    path: CraftingRecipesRoutes.CASEIN,
    loadChildren: () =>
      import('../crafting-recipes/pages/casein/casein.module').then(
        (m) => m.CaseinModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CraftingRecipesRoutingModule {}
