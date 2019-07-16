import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IProduct } from 'src/app/model/product.model';

@Component({
  selector: 'product-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public prodDataSource = new MatTableDataSource<IProduct>();

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getAllProducts().subscribe(response => {
      console.log('size: ' + response.length);
    })
  }

}
