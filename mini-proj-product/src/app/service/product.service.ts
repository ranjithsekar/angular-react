import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PROD_GET_API } from './../constants/product.constants';
import { IProduct } from './../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  public getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(PROD_GET_API);
  }
}
