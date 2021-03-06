import {Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../shared/model/category.model';
import {DictionaryModel} from '../../../../shared/model/dictionary.model';
import {ImageModel} from '../../../../shared/model/image.model';
import {CategoryService} from '../../../../shared/service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category: CategoryModel;
  fileImageField;

  constructor(private _categoryService: CategoryService) {
  }

  ngOnInit() {
    this.category = new CategoryModel();
    this.category.description = new DictionaryModel();
    this.category.name = new DictionaryModel();
  }

  setImage(image: ImageModel) {
    this.category.image = image;
  }

  save() {
    this._categoryService.create(this.category).subscribe(next => {
      console.log(this.category);
      this.ngOnInit();
    }, error => {
      console.error(error);
    });
  }

  changeFileImage(event) {
    this.fileImageField = event;
  }
}
