import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        title: 'FoodiePlace - Delicious Food Delivered'
    },
    {
        path: 'menu',
        loadComponent: () => import('./pages/menu/menu').then(m => m.Menu),
        title: 'Menu - FoodiePlace'
    },
    {
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart').then(m => m.Cart),
        title: 'Shopping Cart - FoodiePlace'
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
