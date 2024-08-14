import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EventComponent } from './components/event/event.component';
// import { ProductComponent } from './components/product/product.component';
// import { AboutComponent } from './components/about/about.component';


import { ContactFormComponent } from './components/contact-form/contact-form.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'events',
        component: EventComponent,
      },
      {
        path: 'contact',
        component: ContactFormComponent,
      },
      // {
      //   path: 'products',
      //   component: ProductComponent,
      // },
      // {
      //   path: 'addProduct',
      //   component: AddProductComponent,
      // },
      // {
      //   path: 'about',
      //   component: AboutComponent,
      // },
      
];
