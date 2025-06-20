import { Routes } from "@angular/router";

export const routes: Routes = [
  {path:"", loadComponent : () => import('./carasouels.component').then(c => c.CarasouelsComponent)}
];
