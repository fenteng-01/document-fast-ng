import { Component, OnInit } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products = products;
  propertyTitle = '1111';
  constructor() { }

  Share(): void {
    console.log(1);
  }

  ngOnInit(): void {
  }

}
