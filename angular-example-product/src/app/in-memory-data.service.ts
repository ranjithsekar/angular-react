import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { "id": 101, "name": "Samsung Galaxy A10", "type": "Smartphone", "price": 1000 },
      { "id": 102, "name": "Dell Vostro", "type": "Laptop", "price": 5000 },
      { "id": 103, "name": "Casio OneTime", "type": "Watch", "price": 3000 },
      { "id": 104, "name": "Rayban", "type": "Sunglass", "price": 4000 },
      { "id": 105, "name": "MI FullCharge", "type": "Powerbank", "price": 5000 },
      { "id": 106, "name": "Lenovo Fast", "type": "Mouse", "price": 300 },
      { "id": 107, "name": "Usha AirFirst", "type": "Fan", "price": 7000 },
      { "id": 108, "name": "Mi Max 3", "type": "Smartphone", "price": 10000 },
      { "id": 109, "name": "LG MaxCool", "type": "AC", "price": 3000 },
      { "id": 110, "name": "Samsung FirstCool", "type": "AirCooler", "price": 2000 }
    ];
    return { products };
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }
}