import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product';
import { MOCK_PRODUCTS } from '../assets/mock-products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string;
  showImage = false;
  products: IProduct[] = MOCK_PRODUCTS;
  filteredProducts: IProduct[];

  filterVal: string;
  get filterValue(): string {
    return this.filterVal;
  }
  set filterValue(value: string) {
    this.filterVal = value;
    this.filteredProducts = this.filterValue ? this.filter(this.filterValue) : this.products;
  }

  constructor() {
    this.filteredProducts = this.products;
  }

  ngOnInit() {
  }

  onRatingClicked(messge: string): void {
    this.pageTitle = 'Product List: ' + messge;
  }

  filter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.products.filter((product: IProduct) =>
      product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
