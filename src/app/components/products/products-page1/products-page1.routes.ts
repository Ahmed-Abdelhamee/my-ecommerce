import { Route } from "@angular/router";

export const routes :Route[] =[
    {path : '' , loadComponent : () => import('./products-page1.component').then(c => c.ProductsPage1Component)}
] 