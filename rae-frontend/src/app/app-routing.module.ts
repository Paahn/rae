import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellRoutes } from './features/shell/shell.routes';

const routes: Routes = [
  {
    path: ShellRoutes.MODULE_PATH,
    loadChildren: () =>
      import('./features/shell/shell.module').then((m) => m.ShellModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
