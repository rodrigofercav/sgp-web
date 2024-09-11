import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl: string = (environment.apiUrl + "products");

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Product[]> {
      return this.httpClient.get<Product[]>(this.apiUrl);
  }
}


