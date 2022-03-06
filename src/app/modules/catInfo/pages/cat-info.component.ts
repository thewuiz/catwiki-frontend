import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CatImages, CatBreed } from '@shared/models/cat-images';
import { ApiService } from 'src/app/core/http/api.service';

import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-cat-info',
  templateUrl: './cat-info.component.html',
  styleUrls: ['./cat-info.component.css'],
})
export class CatInfoComponent implements OnInit, AfterViewInit, OnDestroy {
  public cats: CatImages[] = [];
  public catsImage: any[] = [];
  public breedsBySearch: CatBreed[] = [];
  public showSpinner: boolean = true;

  private suscription = new Subscription();

  filteredBreeds!: Observable<CatBreed[]>;
  control = new FormControl();

  constructor(private apiService: ApiService) {
    this.filteredBreeds = this.control.valueChanges.pipe(
      startWith(''),
      map((breed) => {
        return breed ? this._filterBreeds(breed) : this.breedsBySearch.slice();
      })
    );
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.getBreedsBySearch();
    this.getBreedsImage(4);
    this.getRandomImages(4);
  }

  private _filterBreeds(value: string): CatBreed[] {
    const filterValue = value.toLowerCase();
    return this.breedsBySearch.filter((breed) =>
      breed.name.toLowerCase().includes(filterValue)
    );
  }

  getBreedsImage(limit: number) {
    this.suscription.add(
      this.apiService.getBreedsImage(limit).subscribe({
        next: (response) => {
          this.cats = response;
        },
        error: () => {},
        complete: () => {},
      })
    );
  }

  getRandomImages(limit: number) {
    this.suscription.add(
      this.apiService.getRandomImages(limit).subscribe({
        next: (response) => {
          this.catsImage = response;
        },
        error: () => {},
        complete: () => {},
      })
    );
  }

  getBreedsBySearch(search = '') {
    this.suscription.add(
      this.apiService.getBreedsBySearch(search).subscribe({
        next: (response) => {
          this.breedsBySearch = response;
        },
        error: () => {},
        complete: () => {
          this.showSpinner = false;
        },
      })
    );
  }
}
