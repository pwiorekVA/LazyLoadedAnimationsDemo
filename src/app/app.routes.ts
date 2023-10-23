import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'animated',
    loadComponent: () => import('./animated/animated.component').then((c) => c.AnimatedComponent),
  }
];
