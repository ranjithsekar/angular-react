import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productFormAddGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  this.productFormAddGroup = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    category: ['', Validators.required],
    price: ['', Validators.required]
  });
  }

  onAddProduct(): void {
    this.productService.addProduct(this.productFormAddGroup.value).subscribe(
      (response) => {
        this.router.navigate(['show-product']);
      }
    );
  }
}
