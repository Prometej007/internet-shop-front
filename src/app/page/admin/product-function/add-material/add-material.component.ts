import { Component, OnInit } from '@angular/core';
import {MaterialsModel} from '../../../../shared/model/materials.model';
import {ImageModel} from '../../../../shared/model/image.model';
import {DictionaryModel} from '../../../../shared/model/dictionary.model';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {
  material:MaterialsModel;
  fileImageField;
  constructor() { }

  ngOnInit() {
    this.material=new MaterialsModel();
    this.material.description=new DictionaryModel();
    this.material.name=new DictionaryModel();
  }
  setImage(image:ImageModel){
    this.material.image=image;
  }
  save(){
    console.log(this.material);//todo save
  this.ngOnInit();
  }
changeFileImage(event){
  this.fileImageField=event;
}
}
