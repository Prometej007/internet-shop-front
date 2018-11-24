import {Subject} from 'rxjs';
import {BinModel} from '../model/bin.model';
import {ProductModel} from '../model/product.model';
import {ItemBinModel} from '../model/item-bin.model';
import {Injectable} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {PromocodeModel} from '../model/promocode.model';

export const BIN = 'bin';

@Injectable()
export class BinRxService {
  private bin: BinModel = new BinModel();
  private _bin = new Subject<BinModel>();
  bin$ = this._bin.asObservable();
  private prices: number;

  getOriginalPrice() {
    return this.prices;
  }

  getBin() {
    return this.bin;
  }

  constructor() {
    this.bin.promoCode = new PromocodeModel();
    this.bin.promoCode.code = '';
    this.getFromCashes();
  }

  addInBin(product: ProductModel) {
    if (product == null)
      return;
    let i = new ItemBinModel();
    i.product = new ProductModel();
    i.product.id = product.id;
    i.product.name = product.name;
    i.product.price = product.price;
    i.product.image = product.image;
    i.count = 1;
    this.bin.itemBins.push(i);
    this.price();
    this.cashes();
  }

  isInBin(product: ProductModel) {
    if (product == null)
      return false;
    for (let i = 0; i < this.bin.itemBins.length; i++) {
      if (this.bin.itemBins[i].product.id == product.id) {
        return true;
      }
    }
    return false;
  }

  rmInBin(product: ProductModel) {
    if (product == null)
      return;
    for (let i = 0; i < this.bin.itemBins.length; i++) {
      if (this.bin.itemBins[i].product.id == product.id) {
        this.bin.itemBins.splice(this.bin.itemBins.indexOf(this.bin.itemBins[i]), 1);
        this.price();
      }
    }
    this.cashes();
  }

  changeCountInBin(product: ProductModel, count: number) {
    if (product == null)
      return;
    for (let i = 0; i < this.bin.itemBins.length; i++) {
      if (this.bin.itemBins[i].product.id == product.id) {
        this.bin.itemBins[i].count = count;
        this.price();
      }
    }
    this.cashes();
  }

  addPromoCode(promocode: PromocodeModel) {
    this.bin.promoCode = promocode;
    this.cashes();
  }


  cashes() {
    if (this.bin.itemBins.length > 0) {
      localStorage.setItem(BIN, JSON.stringify(this.bin));
      this._bin.next(this.bin);
    } else
      localStorage.removeItem(BIN);
  }

  getFromCashes() {
    if (!isNullOrUndefined(localStorage.getItem(BIN))) {
      this.bin = JSON.parse(localStorage.getItem(BIN));
      this.price();
      this._bin.next(this.bin);

    }
  }

  private price() {
    this.prices = 0;
    for (let i = 0; i < this.bin.itemBins.length; i++) {
      this.prices += (this.bin.itemBins[i].count * this.bin.itemBins[i].product.price);
    }
  }

}
