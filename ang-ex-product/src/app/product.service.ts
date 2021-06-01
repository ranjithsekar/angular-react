import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'api/products';

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  getProducts(): Observable<Product[]> {
    this.messageService.add('ProductService: fetched products');
    return this.httpClient.get<Product[]>(this.productsUrl);

    /*.pipe(
      catchError(this.handleError<Product[]>('getProducts', []))
    );*/
    //return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    this.messageService.add(`ProductService: getProduct: id=${id}`);

    return this.httpClient.get<Product>(`${this.productsUrl}/${id}`);
    //return of(PRODUCTS.find(product => product.id === id));
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  updateProduct(product: Product): Observable<any> {
    return this.httpClient.put(this.productsUrl, product, httpOptions);
  }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.productsUrl, product, httpOptions).pipe(tap((product: Product) => this.log(`add new item w\ id=${product.id}`)));
  }
}