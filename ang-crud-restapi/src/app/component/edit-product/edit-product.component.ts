import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Product } from '../../model/product.model';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;
  productEditFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    let productId = window.localStorage.getItem("productId");
    this.productEditFormGroup = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.productService.getProductById(+productId).subscribe(
      (response) =>{
        this.productEditFormGroup.setValue(response.result);
      }
    );
  }

  onEditProduct(): void {
    this.productService.updateProduct(this.productEditFormGroup.value)
    .subscribe(
      (response) => {
        if(response.status === 200){
          alert(response.message);
          this.router.navigate(['show-product'])
        } else {
          alert(response.message);
        }
      },
      (error) => {
        alert(error);
      }
    );
  }

}
