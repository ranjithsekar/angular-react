import { IProduct } from './../model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.title += `: ${id}`;

    this.product = {
      id: 200,
      image: 'https://publicdomainvectors.org/photos/laptop-computer-5-pdv.jpg',
      name: 'Laptop',
      model: 'M2',
      brand: 'Dell',
      price: 300,
      rating: '3.2',
      modelno: 'NC-f7'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
