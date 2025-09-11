import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing').then(m => m.Landing),
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./components/dashboard/dashboard').then(m => m.Dashboard)
      },
      // {
      //   path: 'inventory',
      //   loadComponent: () => import('./pages/inventory/inventory').then(m => m.Inventory)
      // },
      // {
      //   path: 'orders',
      //   loadComponent: () => import('./pages/orders/orders').then(m => m.Orders)
      // },
      // {
      //   path: 'customers',
      //   loadComponent: () => import('./pages/customers/customers').then(m => m.Customers)
      // },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.Login)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound)
  }
];
