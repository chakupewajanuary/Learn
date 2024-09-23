import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://freeapi.gerasim.in/api/amazon/GetAllProducts';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}

export interface Product {
  id: number;
  productName: string;
  productDescription: string;
  productImageUrl: string;
}