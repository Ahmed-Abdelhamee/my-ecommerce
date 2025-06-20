import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:"" , loadComponent : () => import('./users-msgs.component').then(c => c.UsersMsgsComponent)},
];
