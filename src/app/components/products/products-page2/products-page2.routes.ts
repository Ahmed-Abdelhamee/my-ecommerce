import { Route } from "@angular/router";

export const routes :Route[] =[
    {path : '' , loadComponent : () => import('./products-page2.component').then( c => c.ProductsPage2Component)}
] 