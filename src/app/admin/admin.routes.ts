import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: "", component : AdminComponent ,
    children: [
      { path: '', component: DashboardComponent },
      { path: "about-us", loadComponent: () => import('./components/about-us/about-us.component').then(c=> c.AboutUsComponent)},
      { path: "carasouels", loadChildren: () => import("./components/carasouels/carasouels.routes").then(r => r.routes) },
      { path: "products", loadChildren: () => import("./components/product/product.routes").then(r => r.routes) },
      { path: "social-links", loadComponent: () => import('./components/social-links/social-links.component').then(c=> c.SocialLinksComponent) },
      { path: "user-msgs", loadChildren: () => import("./components/users-msgs/users-msgs.routes").then(r => r.routes) },
      { path: "youtube", loadChildren: () => import("./components/youtube/youtube.routes").then(r => r.routes) },
      { path: "translate", loadChildren: () => import("./components/translate/translate.routes").then(r => r.routes) },
    ]
  },
];
