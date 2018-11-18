import {Component, OnInit} from '@angular/core';
import {MaterialService} from '../../../../shared/service/material.service';

@Component({
  selector: 'app-container-material',
  templateUrl: './container-material.component.html',
  styleUrls: ['./container-material.component.css']
})
export class ContainerMaterialComponent implements OnInit {

  pageReq;
  page: number = 0;
  limit: number = 10;

  constructor(private _materialService: MaterialService) {
    this.loadPage(0);
  }

  loadPage(page: number) {
    this.page=page;
    this._materialService.findAll(this.limit, this.page).subscribe(next => {
      this.pageReq = next;
    }, error => {
      console.error(error);
    });
  }

  ngOnInit() {
  }

}
