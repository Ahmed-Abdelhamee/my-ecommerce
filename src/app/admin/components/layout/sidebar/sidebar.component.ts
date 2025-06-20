import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { sidebarRoutes } from 'src/app/admin/interfaces/pathes.interface';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,DividerModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  sidebarLinks : sidebarRoutes[] = [
  { path: '/admin', title: 'Home', icon: 'bi bi-house-heart' },
  { path: '/admin/products', title: 'products', icon: 'bi bi-stars' },
  { path: '/admin/carasouels', title: 'carasouels', icon: 'bi bi-diamond-half' },
  { path: '/admin/youtube', title: 'youtube', icon: 'bi bi-collection-play' },
  { path: '/admin/social-links', title: 'social links', icon: 'bi bi-circle' },
  { path: '/admin/about-us', title: 'About Us', icon: 'bi bi-person-vcard' },
  { path: '/admin/user-msgs', title: 'user messages', icon: 'bi bi-person-vcard' },
];

}