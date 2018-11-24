import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../shared/model/product.model';
import {ProductService} from '../../../shared/service/product.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  providers: [ProductService]
})
export class ProductContainerComponent implements OnInit {

  productsPage: any = {};
  products: ProductModel[] = [];
  page: number = 0;
  limit: number = 20;
  form: HTMLFormElement;

  constructor(private _productService: ProductService) {
    this._productService.filter(null,this.limit,this.page).subscribe(next => {
      this.products = next.content;
      this.productsPage = next;
    }, error => {
      console.error(error);
    });
  }

  setDefaultPage() {
    this.page = 0;
    this.limit = 20;
  }

  filter(form: HTMLFormElement) {
    this.form = form;
    this.setDefaultPage();
    this._productService.filter(form, this.limit, this.page).subscribe(next => {

      this.products = next.content;
      this.productsPage = next;
    }, error => {
      console.error(error);
    });
  }

  ngOnInit() {
  }

}
