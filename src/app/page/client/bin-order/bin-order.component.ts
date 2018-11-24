import {Component, OnInit} from '@angular/core';
import {BinService} from '../../../shared/service/bin.service';
import {BinRxService} from '../../../shared/rx/bin.rx.service';
import {BinModel} from '../../../shared/model/bin.model';
import {UserModel} from '../../../shared/model/user.model';

@Component({
  selector: 'app-bin-order',
  templateUrl: './bin-order.component.html',
  styleUrls: ['./bin-order.component.css'],
  providers: [BinService]
})
export class BinOrderComponent implements OnInit {
  bin: BinModel = new BinModel();

  constructor(private _binService: BinService, public _binRxService: BinRxService) {
   this.bin.user=new UserModel();
    this.bin = _binRxService.getBin();
    _binRxService.bin$.subscribe(
      next => {
        this.bin = next;
      }
    );
  }

  buy() {
    this._binService.buy(this.bin).subscribe(next => {
      alert('купівля пройшла успішно');
      this._binRxService.dropBin();
    }, error => {
      console.error(error);
    });
  }

  ngOnInit() {
  }

}
