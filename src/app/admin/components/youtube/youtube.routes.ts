import { Routes } from '@angular/router';
import { YoutubeComponent } from './youtube.component';

export const routes: Routes = [
  {path:"", loadComponent : () => import('./youtube.component').then(c => c.YoutubeComponent)}
];


