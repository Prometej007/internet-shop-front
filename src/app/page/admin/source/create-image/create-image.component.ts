import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Image} from '../../../../shared/model/image.model';

@Component({
  selector: 'app-create-image',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.css']
})
export class CreateImageComponent implements OnInit {

  constructor() {
  }

  img: Image;
  @Input() maintainAspectRatio;
  @Input() aspectRatio;
  @Input() resizeToWidth;
  @Input() imageChangedEvent;
  @Output() getImage = new EventEmitter<Image>();


  send() {
    this.getImage.emit(this.img);
    this.imageChangedEvent = null;
    this.ngOnInit();
  }

  ngOnInit() {
    this.img = new Image();
  }

  loadImageFailed() {

  }

  imageLoaded() {

  }

  imageCropped(event) {
    this.img.content = event.base64;
  }
}
