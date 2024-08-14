import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = 'https://product-app-74q6.onrender.com/products'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.url, product);
  }
}
