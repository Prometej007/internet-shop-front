import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ProductContainerComponent } from './product-container/product-container.component';
import { ProductOneComponent } from './product-one/product-one.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ImageCropperModule} from 'ngx-image-cropper';
import { ProductContainerOneComponent } from './product-container/product-container-one/product-container-one.component';
import { ProductContainerFilterComponent } from './product-container/product-container-filter/product-container-filter.component';
import { BinContainerComponent } from './bin-container/bin-container.component';
import { BinOrderComponent } from './bin-order/bin-order.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ImageCropperModule,
  ],
  declarations: [
    ClientComponent,
    AboutUsComponent,
    ContactComponent,
    ProductContainerComponent,
    ProductOneComponent,
    ProductContainerOneComponent,
    ProductContainerFilterComponent,
    BinContainerComponent,
    BinOrderComponent,
    HeaderComponent,
    FooterComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientModule { }
