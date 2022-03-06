import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-top-breed',
  templateUrl: './top-breed.component.html',
  styleUrls: ['./top-breed.component.css'],
})
export class TopBreedComponent implements OnInit {
  private subscription: Subscription = new Subscription();

  public breeds: any = [];
  public showSpinner: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllBreeds();
  }

  getAllBreeds() {
    this.subscription.add(
      this.apiService.getAllBreeds().subscribe({
        next: (response) => {
          this.breeds = response;
        },
        error: () => {},
        complete: () => {
          this.showSpinner = false;
        },
      })
    );
  }
}
