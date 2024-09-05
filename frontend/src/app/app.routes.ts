import { Routes } from '@angular/router';

export const routes: Routes = [
  {
  path: 'auth',
  loadChildren: () => import('./authentication/authentication.module').then(mod => mod.AuthenticationModule)
  },
  {
    path: '**',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },


];
