import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../shared/model/product.model';
import {ProductService} from '../../../shared/service/product.service';
import {DictionaryModel} from '../../../shared/model/dictionary.model';
import {ImageModel} from '../../../shared/model/image.model';

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
  limit: number = 1;

  form: HTMLFormElement;

  constructor(private _productService: ProductService) {
    this._productService.filter(null, this.limit, this.page).subscribe(next => {
      this.products = next.content;
      this.productsPage = next;
    }, error => {
      console.error(error);
    });
    this.mockProducts()//todo rm mock
  }

  nextPage() {
    this.page += 1;
    this._productService.filter(this.form, this.limit, this.page).subscribe(next => {
      this.products = next.content;
      this.productsPage = next;
    }, error => {
      console.error(error);
    });
  }

  prevPage() {
    this.page -= 1;
    this._productService.filter(this.form, this.limit, this.page).subscribe(next => {
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

  mockProducts() {
    for (let i = 0; i < 10; i++) {
      let prod = new ProductModel();
      prod.id = i;
      prod.name = new DictionaryModel();
      prod.image = new ImageModel();
      prod.image.path = 'logoo.png';
      prod.name.valueUa = 'some name UA';
      this.products.push(prod);
    }
  }

  ngOnInit() {
  }

}
