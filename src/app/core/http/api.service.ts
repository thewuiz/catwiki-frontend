import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatBreed } from '@shared/models/cat-images';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urlEndPoint = environment.base_url;

  constructor(private http: HttpClient) {}

  getAllBreeds(): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/search/all/breeds`);
  }

  getBreedsImage(limit: number = 0): Observable<any> {
    return this.http.get<any>(
      `${this.urlEndPoint}/search/ramdon/image/${limit}`
    );
  }

  getRandomImages(limit: number = 0): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/image/ramdon/${limit}`);
  }

  getBreedsBySearch(search: string): Observable<CatBreed[]> {
    return this.http.get<CatBreed[]>(`${this.urlEndPoint}/search/breeds`, {
      params: { search: search },
    });
  }

  getBreedById(id: string): Observable<any> {
    return this.http.get(`${this.urlEndPoint}/breed/${id}`);
  }

  getImagesByBreedId(id: string, limit: number): Observable<any> {
    return this.http.get(`${this.urlEndPoint}/search/image/${id}/${limit}`);
  }
}
