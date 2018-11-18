import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ProductFunctionComponent } from './product-function/product-function.component';
import { BuyFunctionComponent } from './buy-function/buy-function.component';
import { AnalyticsFunctionComponent } from './analytics-function/analytics-function.component';
import { AddMaterialComponent } from './product-function/add-material/add-material.component';
import {ImageCropperModule} from 'ngx-image-cropper';
import { CreateImageComponent } from './source/create-image/create-image.component';
import { AddCategoryComponent } from './product-function/add-category/add-category.component';
import { AddProductComponent } from './product-function/add-product/add-product.component';
import { ContainerMaterialComponent } from './product-function/container-material/container-material.component';
import { ContainerCategoryComponent } from './product-function/container-category/container-category.component';
import { ContainerProductComponent } from './product-function/container-product/container-product.component';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ImageCropperModule,
  ],
  declarations: [
    AdminComponent,
    ProductFunctionComponent,
    BuyFunctionComponent,
    AnalyticsFunctionComponent,
    AddMaterialComponent,
    CreateImageComponent,
    AddCategoryComponent,
    AddProductComponent,
    ContainerMaterialComponent,
    ContainerCategoryComponent,
    ContainerProductComponent]
})
export class AdminModule { }
