import {Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {BuyFunctionComponent} from './buy-function/buy-function.component';
import {ProductFunctionComponent} from './product-function/product-function.component';
import {AnalyticsFunctionComponent} from './analytics-function/analytics-function.component';
import {AddMaterialComponent} from './product-function/add-material/add-material.component';


export const adminRoutes: Routes = [
  {path:"admin",component:AdminComponent,children:[
      {path:"function-buy",component:BuyFunctionComponent},
      {path:"function-product",component:ProductFunctionComponent,children:[
          {path:"add-materials",component:AddMaterialComponent}
        ]},
      {path:"function-analytics",component:AnalyticsFunctionComponent}
    ]}
];
