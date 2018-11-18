import {Component, OnInit} from '@angular/core';
import {ImageModel} from '../../../../shared/model/image.model';
import {ProductModel, ProductType, SoftnessType} from '../../../../shared/model/product.model';
import {DictionaryModel} from '../../../../shared/model/dictionary.model';
import {CategoryModel} from '../../../../shared/model/category.model';
import {MaterialsModel} from '../../../../shared/model/materials.model';
import {ProductService} from '../../../../shared/service/product.service';
import {MaterialService} from '../../../../shared/service/material.service';
import {CategoryService} from '../../../../shared/service/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  fileImageField;
  product: ProductModel;
  listCategory: CategoryModel[] = [];
  listMaterials: MaterialsModel[] = [];
  softnessType: SoftnessType[] = ['SOFT', 'MODERATELY_SOFT', 'MIDDLE', 'MODERATELY_HARD', 'HARD'];
  productType: ProductType[] = ['UNILATERAL', 'DOUBLE_SIDED'];

  constructor(private _productService: ProductService, private _materialService: MaterialService, private _categoryService: CategoryService) {

    _categoryService.findAll(999, 0).subscribe(next => {
      this.listCategory = next.content;
    }, error => {
      console.error(error);
    });

    _materialService.findAll(999, 0).subscribe(next => {
      this.listMaterials = next.content;
    }, error => {
      console.error(error);
    });
  }

  pushSoftnessType(s: SoftnessType) {
    if (this.product.softnessTypes.indexOf(s) == -1)
      this.product.softnessTypes.push(s);
    else
      this.product.softnessTypes = this.product.softnessTypes.filter(value => value != s);
  }

  pushMaterials(s: MaterialsModel) {
    if (this.product.materials.indexOf(s) == -1)
      this.product.materials.push(s);
    else
      this.product.materials = this.product.materials.filter(value => value != s);
  }

  selectCategory(s: CategoryModel) {
    this.product.category = s;
  }

  selectProductType(s: ProductType) {
    this.product.productType = s;
  }

  ngOnInit() {

    this.product = new ProductModel();
    this.product.description = new DictionaryModel();
    this.product.name = new DictionaryModel();
    this.product.materials = [];
    this.product.softnessTypes = [];
    this.product.canBuy = false;
    this.product.winterSummerOption = false;
    this.product.news = false;
  }

  setImage(image: ImageModel) {
    this.product.image = image;
  }

  save() {
    this._productService.create(this.product).subscribe(next => {
      console.log(this.product);
      this.ngOnInit();
    }, error => {
      console.error(error);
    });
  }

  changeFileImage(event) {
    this.fileImageField = event;
  }
}
