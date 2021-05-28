import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';
import { ProductApiResponse } from '../model/product-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVICE_URL = 'http://localhost:6060/springboot-restapi/product';

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<ProductApiResponse> {
    return this.http.get<ProductApiResponse>(this.SERVICE_URL + '/all');
  }

  getProductById(productId: number): Observable<ProductApiResponse> {
    return this.http.get<ProductApiResponse>(this.SERVICE_URL + '/' + productId);
  }

  addProduct(product: Product): Observable<ProductApiResponse> {
    return this.http.post<ProductApiResponse>(this.SERVICE_URL + '/add', product);
  }

  updateProduct(product: Product): Observable<ProductApiResponse> {
    return this.http.put<ProductApiResponse>(this.SERVICE_URL + '/update', product);
  }

  deleteProduct(productId: string): Observable<ProductApiResponse> {
    return this.http.delete<ProductApiResponse>(this.SERVICE_URL + '/delete/' + productId);
  }

}
