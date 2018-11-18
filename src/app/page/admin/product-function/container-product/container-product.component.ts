import {Component, OnInit} from '@angular/core';
import {MaterialService} from '../../../../shared/service/material.service';
import {ProductService} from '../../../../shared/service/product.service';
import {ProductModel} from '../../../../shared/model/product.model';

@Component({
  selector: 'app-container-product',
  templateUrl: './container-product.component.html',
  styleUrls: ['./container-product.component.css']
})
export class ContainerProductComponent implements OnInit {
  pageReq;
  page: number = 0;
  limit: number = 10;

  constructor(private _productService: ProductService) {
    this.loadPage(0);
  }

  loadPage(page: number) {
    this.page = page;
    this._productService.findAll(this.limit, this.page).subscribe(next => {
      this.pageReq = next;
    }, error => {
      console.error(error);
    });
  }

  changeNews(one: ProductModel) {
//todo
  }

  changeAvailable(one: ProductModel) {
    this._productService.changeAvailable(one).subscribe(next => {
      console.log('change');
    }, error => {
      console.error(error);
    });
  }

  changeCanBuy(one: ProductModel) {
//todo
  }

  ngOnInit() {
  }


}
