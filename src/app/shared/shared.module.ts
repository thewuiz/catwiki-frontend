import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SpinnerLoadingComponent,
    RatingComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SpinnerLoadingComponent,
    RatingComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
