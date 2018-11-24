import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../shared/service/product.service';
import {ProductModel} from '../../../shared/model/product.model';

@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.css'],
  providers: [ProductService]
})
export class ProductOneComponent implements OnInit {

   product: ProductModel;

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) {
    _activatedRoute.params.subscribe(value => {
      _productService.findOne(value['id']).subscribe(next => {
        this.product = next;
      }, error => {
        console.error(error);
      });
    });
  }

  ngOnInit() {
  }

}
