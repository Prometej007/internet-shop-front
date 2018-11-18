import { Component, OnInit } from '@angular/core';
import {MaterialService} from '../../../../shared/service/material.service';
import {ProductService} from '../../../../shared/service/product.service';

@Component({
  selector: 'app-container-product',
  templateUrl: './container-product.component.html',
  styleUrls: ['./container-product.component.css']
})
export class ContainerProductComponent implements OnInit {
  pageReq;
  page: number = 0;
  limit: number = 10;

  constructor(private _materialService: ProductService) {
    this.loadPage(0);
  }

  loadPage(page: number) {
    this.page=page;
    this._materialService.findAll(this.limit, this.page).subscribe(next => {
      this.pageReq = next;
    }, error => {
      console.error(error);
    });
  }

  ngOnInit() {
  }


}
