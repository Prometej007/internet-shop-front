import {Component, OnInit} from '@angular/core';
import {PromoCodeService} from '../../../../shared/service/promo-code.service';
import {PromocodeModel} from '../../../../shared/model/promocode.model';

@Component({
  selector: 'app-container-promo-code',
  templateUrl: './container-promo-code.component.html',
  styleUrls: ['./container-promo-code.component.css'],
  providers: [PromoCodeService]
})
export class ContainerPromoCodeComponent implements OnInit {
  pageReq;
  limit: number = 20;
  page: number = 0;

  constructor(private _promoCodeService: PromoCodeService) {
    this.loadPage(0);
  }

  loadPage(page: number) {
    this.page = page;
    this._promoCodeService.findAll(this.limit, this.page).subscribe(next => {
      this.pageReq = next;
    }, error => {
      console.error(error);
    });
  }

  ngOnInit() {
  }

}
