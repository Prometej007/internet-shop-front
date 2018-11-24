import {Component, OnInit} from '@angular/core';
import {BinRxService} from '../../../shared/rx/bin.rx.service';
import {BinModel} from '../../../shared/model/bin.model';
import {ProductModel} from '../../../shared/model/product.model';
import {ItemBinModel} from '../../../shared/model/item-bin.model';

@Component({
  selector: 'app-bin-container',
  templateUrl: './bin-container.component.html',
  styleUrls: ['./bin-container.component.css']
})
export class BinContainerComponent implements OnInit {
  bin: BinModel = new BinModel();

  constructor(public _binRxService: BinRxService) {
    this.bin = _binRxService.getBin();
    _binRxService.bin$.subscribe(
      next => {
        this.bin = next;
      }
    );
  }

  changeCountInBin(itemBIn: ItemBinModel) {
    this._binRxService.changeCountInBin(itemBIn.product, itemBIn.count);
  }

  ngOnInit() {
  }

}
