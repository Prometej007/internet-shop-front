import {Routes} from '@angular/router';
import {ClientComponent} from './client.component';
import {ContactComponent} from './contact/contact.component';
import {AboutUsComponent} from './about-us/about-us.component';


export const clientRoutes: Routes = [
  {
    path: '', component: ClientComponent, children: [
      {path: 'contact', component: ContactComponent},
      {path: 'about-us', component: AboutUsComponent}
    ]
  }
];
