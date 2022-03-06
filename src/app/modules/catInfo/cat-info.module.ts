import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatInfoRoutingModule } from './cat-info-routing.module';
import { CatInfoComponent } from './pages/cat-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [CatInfoComponent],
  imports: [
    CommonModule,
    CatInfoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    SharedModule,
  ],
})
export class CatInfoModule {}
