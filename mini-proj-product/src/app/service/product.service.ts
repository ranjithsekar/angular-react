import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PROD_GET_API, PROD_ADD_API } from './../constants/product.constants';
import { IProduct } from './../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  public getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(PROD_GET_API);
  }

  public add(product: IProduct): Observable<IProduct> {
    const inputJson = JSON.stringify({ id: product.id, name: product.name, type: product.category, price: product.price });
    const httpOptions: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<IProduct>(PROD_ADD_API, inputJson, httpOptions);
  }

}
