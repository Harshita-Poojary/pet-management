import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './constants/app-routes.constant';

export const routes: Routes = [
   {
      path: AppRoutes.LOGIN,
      loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
   },
   {
      path: '',
      redirectTo: AppRoutes.LOGIN,
      pathMatch: 'full'
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }