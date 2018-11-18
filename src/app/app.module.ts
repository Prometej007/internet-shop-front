import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PageComponent} from './page/page.component';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './page/admin/admin.component';
import {adminRoutes} from './page/admin/admin.routes';
import {AdminModule} from './page/admin/admin.module';
import {ImageCropperModule} from 'ngx-image-cropper';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './shared/http.inteceptors/auth-inteceptor';
import {MaterialService} from './shared/service/material.service';
import {CategoryService} from './shared/service/category.service';
import {ProductService} from './shared/service/product.service';

export const routes: Routes = [
  ...adminRoutes
];


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    AdminModule,
    ImageCropperModule,
    HttpClientModule,

  ],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    MaterialService,
    CategoryService,
    ProductService
  ],
  bootstrap: [PageComponent]
})
export class AppModule {
}
