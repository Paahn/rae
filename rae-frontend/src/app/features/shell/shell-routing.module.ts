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
        path: ShellRoutes.ABOUT,
        loadChildren: () =>
          import('../about/about-routing.module').then(
            (m) => m.AboutRoutingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
