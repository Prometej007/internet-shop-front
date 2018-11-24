import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CategoryService} from '../../../../shared/service/category.service';
import {CategoryModel} from '../../../../shared/model/category.model';
import {MaterialService} from '../../../../shared/service/material.service';
import {MaterialsModel} from '../../../../shared/model/materials.model';

@Component({
  selector: 'app-product-container-filter',
  templateUrl: './product-container-filter.component.html',
  styleUrls: ['./product-container-filter.component.css'],
  providers: [CategoryService, MaterialService]
})
export class ProductContainerFilterComponent implements OnInit {
  category: CategoryModel[] = [];
  materials: MaterialsModel[] = [];
  pageCategory: number = 0;
  limitCategory: number = 10;
  pageMaterials: number = 0;
  limitMaterials: number = 10;
  softness: number[] = [0, 1, 2, 3, 4];
  productType: number[] = [0, 1];
  @ViewChild('htmlFormElement') htmlFormElementVC: ElementRef;
  @Output() filterForm = new EventEmitter();

  constructor(private _categoryService: CategoryService, private _materialService: MaterialService) {
    _categoryService.findAllActive(this.limitCategory, this.pageCategory).subscribe(next => {
      this.category = next.content;
    }, error => {
      console.error(error);
    });
    _materialService.findAllActive(this.limitMaterials, this.pageMaterials).subscribe(next => {
      this.materials = next.content;
    }, error => {
      console.error(error);
    });
  }

  send() {
    // let f = new FormData(this.htmlFormElementVC.nativeElement);
    //
    // console.log('category');
    // console.log(f.getAll('category'));
    // console.log('materials');
    // console.log(f.getAll('materials'));
    // console.log('softness');
    // console.log(f.getAll('softness'));
    // console.log('productType');
    // console.log(f.getAll('productType'));
    // console.log('winterSummerOption');
    // console.log(f.getAll('winterSummerOption'));
    // console.log('minPrice');
    // console.log(f.getAll('minPrice'));
    // console.log('maxPrice');
    // console.log(f.getAll('maxPrice'));
    // console.log('minHeight');
    // console.log(f.getAll('minHeight'));
    // console.log('maxHeight');
    // console.log(f.getAll('maxHeight'));
    // console.log('minWidth');
    // console.log(f.getAll('minWidth'));
    // console.log('maxWidth');
    // console.log(f.getAll('maxWidth'));
    // console.log('minLength');
    // console.log(f.getAll('minLength'));
    // console.log('maxLength');
    // console.log(f.getAll('maxLength'));
    // console.log('minMaximumLoad');
    // console.log(f.getAll('minMaximumLoad'));
    // console.log('maxMaximumLoad');
    // console.log(f.getAll('maxMaximumLoad'));
    this.filterForm.emit(this.htmlFormElementVC.nativeElement);
  }

  ngOnInit() {
  }

}
