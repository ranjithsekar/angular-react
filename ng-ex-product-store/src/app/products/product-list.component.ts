import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string;
  showImage = false;
  products: IProduct[];
  filteredProducts: IProduct[];
  errorMessage: string;

  filterVal: string;
  get filterValue(): string {
    return this.filterVal;
  }
  set filterValue(value: string) {
    this.filterVal = value;
    this.filteredProducts = this.filterValue ? this.filter(this.filterValue) : this.products;
  }

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
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
