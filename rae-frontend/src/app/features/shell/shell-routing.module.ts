import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { ShellRoutes } from './shell.routes';

const routes: Routes = [
  {
    path: '',
    component: PageDashboardComponent,
    data: {
      routes: {
        auth: `/${ShellRoutes.MODULE_PATH}`,
      },
    },
    children: [
      {
        path: ShellRoutes.HOME,
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: ShellRoutes.ABOUT,
        loadChildren: () =>
          import('../about/about.module').then((m) => m.AboutModule),
      },
      {
        path: ShellRoutes.EXHIBITS,
        loadChildren: () =>
          import('../exhibits/exhibits.module').then((m) => m.ExhibitsModule),
      },
      {
        path: ShellRoutes.CRAFTING_RECIPES,
        loadChildren: () =>
          import('../crafting-recipes/crafting-recipes.module').then(
            (m) => m.CraftingRecipesModule
          ),
      },
      {
        path: '',
        redirectTo: ShellRoutes.HOME,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
