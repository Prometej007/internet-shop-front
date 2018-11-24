import {Component, OnInit} from '@angular/core';
import {PromocodeModel} from '../../../../shared/model/promocode.model';
import {PromoCodeService} from '../../../../shared/service/promo-code.service';
import {ProductService} from '../../../../shared/service/product.service';
import {ProductModel} from '../../../../shared/model/product.model';

@Component({
  selector: 'app-add-promo-code',
  templateUrl: './add-promo-code.component.html',
  styleUrls: ['./add-promo-code.component.css'],
  providers: [PromoCodeService, ProductService]
})
export class AddPromoCodeComponent implements OnInit {
  promoCode: PromocodeModel = new PromocodeModel();
  product: ProductModel[] = [];
  isInSystemV: boolean;

  isInSystem() {
    this._promoCodeService.isPresent(this.promoCode.code).subscribe(next => {
      this.isInSystemV = next;
    }, error => {
      console.error(error);
    });
  }

  constructor(private _promoCodeService: PromoCodeService, private _productService: ProductService) {
    this.default();
    _productService.findAll(1000, 0).subscribe(next => {
      this.product = next.content;
    }, error => {
      console.error(error);
    });
  }

  ngOnInit() {
  }

  default() {
    this.promoCode = new PromocodeModel();
    this.promoCode.discount = 0;
  }

  pushProduct(one: ProductModel) {
    if (this.promoCode.product.indexOf(one) == -1)
      this.promoCode.product.push(one);
    else
      this.promoCode.product.splice(this.promoCode.product.indexOf(one), 1);
  }

  create() {
    this._promoCodeService.create(this.promoCode).subscribe(next => {
    this.default()
      }, error => {
      console.error(error);
    });
  }

}
