import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedInfoRoutingModule } from './breed-info-routing.module';
import { BreedInfoComponent } from './pages/breed-info.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [BreedInfoComponent],
  imports: [CommonModule, BreedInfoRoutingModule, SharedModule],
})
export class BreedInfoModule {}
