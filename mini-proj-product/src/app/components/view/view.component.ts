import { AddComponent } from './../add/add.component';
import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { IProduct } from 'src/app/model/product.model';
import { PRODUCT_HEADERS } from 'src/app/constants/product.constants';

@Component({
  selector: 'product-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public productDataSource: MatTableDataSource<IProduct>;
  public prodHeaders = PRODUCT_HEADERS;

  constructor(
    private productService: ProductService,
    private matDialog: MatDialog) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((response: IProduct[]) => {
      this.productDataSource = new MatTableDataSource<IProduct>(Object.assign(response));
      console.log('size: ' + response.length);
    })
  }

  public add(): void {
    const matDialogRef = this.matDialog.open(AddComponent);
    matDialogRef.afterClosed().subscribe((newProduct: IProduct) => {
      this.productDataSource.data.unshift(newProduct);
      this.productDataSource._updateChangeSubscription();
    }); 
  }

}
