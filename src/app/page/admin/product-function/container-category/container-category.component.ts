import { Component, OnInit } from '@angular/core';
import {MaterialService} from '../../../../shared/service/material.service';
import {CategoryService} from '../../../../shared/service/category.service';

@Component({
  selector: 'app-container-category',
  templateUrl: './container-category.component.html',
  styleUrls: ['./container-category.component.css']
})
export class ContainerCategoryComponent implements OnInit {
  pageReq;
  page: number = 0;
  limit: number = 10;

  constructor(private _materialService: CategoryService) {
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
