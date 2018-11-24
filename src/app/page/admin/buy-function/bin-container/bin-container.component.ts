import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BinService} from '../../../../shared/service/bin.service';
import {BinModel} from '../../../../shared/model/bin.model';

@Component({
  selector: 'app-bin-container',
  templateUrl: './bin-container.component.html',
  styleUrls: ['./bin-container.component.css'],
  providers: [BinService]
})
export class BinContainerComponent implements OnInit, AfterViewInit {

  @ViewChild('form') formVC: ElementRef;
  page: number = 0;
  limit: number = 20;
  bins: BinModel[] = [];
  binPage: any = {};

  constructor(private _binService: BinService) {
    this.openPage(0);
  }

  openPage(page: number) {
    this.page = page;
    this._binService.filter(this.formVC==null?new FormData():new FormData(this.formVC.nativeElement), this.limit, this.page).subscribe(next => {
      this.bins = next.content;
      this.binPage = next;
    }, error => {
      console.error(error);
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
