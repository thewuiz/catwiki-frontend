import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'wiki',
    loadChildren: () =>
      import('@modules/catInfo/cat-info.module').then((m) => m.CatInfoModule),
  },
  {
    path: '**', //TODO 404 cuando no existe la ruta
    redirectTo: 'wiki',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
