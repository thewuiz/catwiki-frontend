import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatInfoComponent } from './pages/cat-info.component';

const routes: Routes = [
  { path: '', component: CatInfoComponent },
  {
    path: 'breed/:id',
    loadChildren: () =>
      import('@modules/breedInfo/breed-info.module').then(
        (m) => m.BreedInfoModule
      ),
  },
  {
    path: 'top',
    loadChildren: () =>
      import('@modules/topBreed/top-breed.module').then(
        (m) => m.TopBreedModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatInfoRoutingModule {}
