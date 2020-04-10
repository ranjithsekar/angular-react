import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSort } from '@angular/material';

import { AddComponent } from './../add/add.component';
import { ProductService } from './../../service/product.service';
import { IProduct } from 'src/app/model/product.model';
import { PRODUCT_HEADERS } from 'src/app/constants/product.constants';

@Component({
  selector: 'product-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) matSort: MatSort;

  public productDataSource = new MatTableDataSource<IProduct>();
  public prodHeaders = PRODUCT_HEADERS;

  constructor(
    private productService: ProductService,
    private matDialog: MatDialog) {
  }

  ngOnInit() {
    //this.addData();
    this.productService.getAllProducts().subscribe((response: IProduct[]) => {
      this.productDataSource = new MatTableDataSource<IProduct>(Object.assign(response));
      this.productDataSource.sortingDataAccessor = (item, property) => {
        return item[property].toLocaleLowerCase();
      }
      this.productDataSource.sort = this.matSort;
    });
  }

  public add(): void {
    // let product = new IProduct();
    // product.id = '7777';
    // product.name = 'happy ranjith';
    // product.type = 't21';
    // product.price = '2050';
    // this.productService.add(product).subscribe(response => {

    // });
    const matDialogRef = this.matDialog.open(AddComponent, {
      data: {
        name: 'Ranjith'
      },
      disableClose: false
    });
    matDialogRef.afterClosed().subscribe((newProduct: IProduct) => {
      this.productDataSource.data.unshift(newProduct);
      this.productDataSource._updateChangeSubscription();
    });
  }

  private addData() {
    let product = new IProduct();
    product.id = '111';
    product.name = 'aa c';
    product.type = 't1';
    product.price = '200';
    this.productService.add(product).subscribe(response => { })

    product.id = '222';
    product.name = 'aa a';
    product.type = 't1';
    product.price = '200';
    this.productService.add(product).subscribe(response => { })

    product.id = '333';
    product.name = 'bb c';
    product.type = 't1';
    product.price = '200';
    this.productService.add(product).subscribe(response => { })

    product.id = '444';
    product.name = 'bb d';
    product.type = 't1';
    product.price = '200';
    this.productService.add(product).subscribe(response => { })

    product.id = '555';
    product.name = 'google site';
    product.type = 't1';
    product.price = '200';
    this.productService.add(product).subscribe(response => { })

    product.id = '666';
    product.name = 'happy ajay';
    product.type = 't1';
    product.price = '200';
    this.productService.add(product).subscribe(response => { })
  }

}
