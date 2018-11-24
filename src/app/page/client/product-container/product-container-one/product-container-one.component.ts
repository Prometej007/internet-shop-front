import {Component, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../../../../shared/model/product.model';

@Component({
  selector: 'app-product-container-one',
  templateUrl: './product-container-one.component.html',
  styleUrls: ['./product-container-one.component.css']
})
export class ProductContainerOneComponent implements OnInit {

  @Input() product:ProductModel;

  constructor() { }

  ngOnInit() {
  }

}
