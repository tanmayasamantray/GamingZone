import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { DetailComponent } from './Components/detail/detail.component';

export const routes: Routes = [
    {
        path: '', 
        component: HomeComponent,
        title: "Home"
    },
    {
        path: 'products',
        component: ProductsComponent,
        title: "Products"
    },
    {
        path: 'details/:id',
        component: DetailComponent,
        title: "Details"
    }
];
