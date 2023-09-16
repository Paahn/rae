import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CraftingRecipesPage } from './crafting-recipes.page';
import { CraftingRecipesRoutingModule } from './crafting-recipes-routing.module';

@NgModule({
  declarations: [CraftingRecipesPage],
  imports: [CraftingRecipesRoutingModule, SharedModule],
})
export class CraftingRecipesModule {}
