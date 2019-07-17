import { IProduct } from 'src/app/model/product.model';
import { ProductService } from './../../service/product.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  id: string;
  name: string;
  type: string;
  price: string;

  constructor(
    private matDilogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public matDialogData: any,
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  add(): void {
    let product = new IProduct();
    product.id = this.id;
    product.name = this.name;
    product.type = this.type;
    product.price = this.price;
    this.productService.add(product).subscribe(response => {
      this.matDilogRef.close(response);
    })
  }

}
