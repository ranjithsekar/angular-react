import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { MOCK_PRODUCTS } from '../assets/mock-products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle = 'Product List';
  products: Product[] = MOCK_PRODUCTS;

  constructor() { }

  ngOnInit() {
  }

}
