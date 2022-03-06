import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-breed-info',
  templateUrl: './breed-info.component.html',
  styleUrls: ['./breed-info.component.css'],
})
export class BreedInfoComponent implements OnInit, OnDestroy {
  public breed: any;
  public breedImages: any;
  public showSpinner: boolean = true;
  private subscription: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getParams();
  }

  getParams() {
    this.subscription.add(
      this.activatedRoute.params.subscribe({
        next: (params) => {
          const { id } = params;
          this.getBreedById(id);
          this.getImagesByBreedId(id, 8);
        },
        error: (err) => {
          Swal.fire('Ups!', 'Error loading params', 'error');
        },
        complete: () => {},
      })
    );
  }

  getBreedById(id: string) {
    this.subscription.add(
      this.apiService.getBreedById(id).subscribe({
        next: (response) => {
          this.breed = response[0];
        },
        error: (err) => {
          Swal.fire('Ups!', 'Error loading breed information', 'error');
        },
        complete: () => {},
      })
    );
  }

  getImagesByBreedId(id: string, limit: number) {
    this.subscription.add(
      this.apiService.getImagesByBreedId(id, limit).subscribe({
        next: (response) => {
          this.breedImages = response;
        },
        error: () => {},
        complete: () => {
          this.showSpinner = false;
        },
      })
    );
  }
}
