import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../shared/service/product.service';
import {ProductModel} from '../../../shared/model/product.model';
import {BinRxService} from '../../../shared/rx/bin.rx.service';
import {DictionaryModel} from '../../../shared/model/dictionary.model';

@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.css'],
  providers: [ProductService]
})
export class ProductOneComponent implements OnInit {

  product: ProductModel=new ProductModel();

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService, private _binRxService: BinRxService) {
   this.product.name=new DictionaryModel();
   
    _activatedRoute.params.subscribe(value => {
      _productService.findOne(value['id']).subscribe(next => {
        this.product = next;
      }, error => {
        console.error(error);
      });
    });
  }

  addInBin() {
    this._binRxService.addInBin(this.product);
  }
  isBin() {
    return this._binRxService.isInBin(this.product);
  }

  ngOnInit() {
  }

}
