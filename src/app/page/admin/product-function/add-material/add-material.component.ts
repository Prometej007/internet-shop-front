import {Component, OnInit} from '@angular/core';
import {MaterialsModel} from '../../../../shared/model/materials.model';
import {ImageModel} from '../../../../shared/model/image.model';
import {DictionaryModel} from '../../../../shared/model/dictionary.model';
import {MaterialService} from '../../../../shared/service/material.service';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css'],
  providers: [MaterialService]
})
export class AddMaterialComponent implements OnInit {
  material: MaterialsModel;
  fileImageField;

  constructor(private _materialService: MaterialService) {
  }

  ngOnInit() {
    this.material = new MaterialsModel();
    this.material.description = new DictionaryModel();
    this.material.name = new DictionaryModel();
  }

  setImage(image: ImageModel) {
    this.material.image = image;
  }

  save() {
    console.log(this.material);
    this._materialService.create(this.material).subscribe(next => {
      this.ngOnInit();
    }, error => {
      console.error(error);
    });
  }

  changeFileImage(event) {
    this.fileImageField = event;
  }
}
