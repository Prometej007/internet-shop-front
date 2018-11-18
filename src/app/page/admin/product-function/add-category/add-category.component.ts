import {Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../shared/model/category.model';
import {DictionaryModel} from '../../../../shared/model/dictionary.model';
import {ImageModel} from '../../../../shared/model/image.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category: CategoryModel;
  fileImageField;

  constructor() {
  }

  ngOnInit() {
    this.category = new CategoryModel();
    this.category.description = new DictionaryModel();
    this.category.name = new DictionaryModel();
  }
  setImage(image:ImageModel){
    this.category.image=image;
  }
  save() {
    console.log(this.category);//todo save
    this.ngOnInit();
  }

  changeFileImage(event) {
    this.fileImageField = event;
  }
}
