import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:"", loadComponent : () => import('./product.component').then( c => c.ProductComponent)}
];

