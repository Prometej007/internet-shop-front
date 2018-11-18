import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {
  fileImageField;
  constructor() { }

  ngOnInit() {
  }
changeFileImage(event){
  this.fileImageField=event;
}
}
