import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBreedRoutingModule } from './top-breed-routing.module';
import { TopBreedComponent } from './pages/top-breed.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [TopBreedComponent],

  imports: [
    CommonModule,
    TopBreedRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
  ],
})
export class TopBreedModule {}
