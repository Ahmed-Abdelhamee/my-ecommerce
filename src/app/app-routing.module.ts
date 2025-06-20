import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: "admin", loadChildren: () => import("./admin/admin.routes").then(m => m.routes) },
  { path: "home", redirectTo: "", pathMatch: "full" },
  { path: "", component: HomeComponent },
  { path: "products-page1", loadChildren: () => import("./components/products/products-page1/products-page1.routes").then(m => m.routes) },
  { path: "products-page2", loadChildren: () => import("./components/products/products-page2/products-page2.routes").then(m => m.routes) },
  { path: "youtube", loadChildren: () => import("./components/youtube-view/youtube.routes").then(m => m.routes) },
  { path: "about-us", loadComponent : ()=> import('./components/about-us/about-us.component').then(c => c.AboutUsComponent) },
  { path: "prodcut-details/:id", loadComponent : () => import('./components/products/product-details/product-details.component').then(c => c.ProductDetailsComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
