import {Component, OnInit} from '@angular/core';
import {BinRxService} from '../../../shared/rx/bin.rx.service';
import {BinModel} from '../../../shared/model/bin.model';
import {ProductModel} from '../../../shared/model/product.model';
import {ItemBinModel} from '../../../shared/model/item-bin.model';
import {BinService} from '../../../shared/service/bin.service';
import {PromocodeModel} from '../../../shared/model/promocode.model';

@Component({
  selector: 'app-bin-container',
  templateUrl: './bin-container.component.html',
  styleUrls: ['./bin-container.component.css'],
  providers:[BinService]
})
export class BinContainerComponent implements OnInit {
  bin: BinModel = new BinModel();

  constructor(public _binRxService: BinRxService,private _binService:BinService) {
   this.bin.promoCode=new PromocodeModel();
   this.bin.promoCode.code="";
    this.bin = _binRxService.getBin();
    _binRxService.bin$.subscribe(
      next => {
        this.bin = next;
      }
    );
  }

  private changePromoCode(){
    this.bin.promoCode=new PromocodeModel();
    this.bin.promoCode.code=(<HTMLInputElement>event.target).value;
    this._binService.price(this.bin).subscribe(next=>{
      this._binRxService.addPromoCode(this.bin.promoCode);
      console.log(next);
      this.bin.price=next;
    },error=>{
    console.error(error);
    });
  }

  changeCountInBin(itemBIn: ItemBinModel) {
    this._binRxService.changeCountInBin(itemBIn.product, itemBIn.count);
  }

  ngOnInit() {
  }

}
