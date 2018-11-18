import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PageComponent} from './page/page.component';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './page/admin/admin.component';
import {adminRoutes} from './page/admin/admin.routes';
import {AdminModule} from './page/admin/admin.module';
import {ImageCropperModule} from 'ngx-image-cropper';

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
  ],
  providers: [],
  bootstrap: [PageComponent]
})
export class AppModule {
}
