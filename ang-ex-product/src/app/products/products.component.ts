import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  add(name: string, type: string, price: number): void {
    name = name.trim();
    if (!name) { return; }

    this.productService.addProduct({ name, type, price } as Product)
      .subscribe(product => this.products.push(product));
  }
}

/**
   * 
   * selectedProduct: Product;
   * onSelect(product: Product): void {
    this.selectedProduct = product;
  } 
   * 
   getProducts(): void {
    this.products = this.productService.getProducts();}
   */