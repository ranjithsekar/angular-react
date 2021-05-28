import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  products: Product[];
  
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe( (response) =>{
      this.products = response.result;
  });
  }

  addProduct(): void {
    this.router.navigate(['add-product']);
  }

  editProduct(product: Product): void {
    window.localStorage.removeItem("productId");
    window.localStorage.setItem("productId", product.id);    
    this.router.navigate(['edit-product']);
  }

  deleteProduct(product: Product): void {
    this.productService.deleteProduct(product.id).subscribe(
      (response) => {
        this.products = this.products.filter(e => e !== product);
      });
  }
}
