import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedInfoComponent } from './pages/breed-info.component';

const routes: Routes = [{ path: '', component: BreedInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreedInfoRoutingModule {}
