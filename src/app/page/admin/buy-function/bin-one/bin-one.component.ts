import {Component, OnInit} from '@angular/core';
import {BinModel} from '../../../../shared/model/bin.model';
import {BinService} from '../../../../shared/service/bin.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bin-one',
  templateUrl: './bin-one.component.html',
  styleUrls: ['./bin-one.component.css'],
  providers: [BinService]
})
export class BinOneComponent implements OnInit {
  bin: BinModel = new BinModel();

  constructor(private _binService: BinService, private _activatedRoute: ActivatedRoute) {
    _activatedRoute.params.subscribe(next => {
      this._binService.findOne(next['id']).subscribe(next => {
        this.bin = next;
      }, error => {
        console.error(error);
      });
    });
  }

  ngOnInit() {
  }

}
