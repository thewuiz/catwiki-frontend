import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopBreedComponent } from './pages/top-breed.component';

const routes: Routes = [{ path: '', component: TopBreedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopBreedRoutingModule {}
