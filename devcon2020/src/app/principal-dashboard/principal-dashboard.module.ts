import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalDashboardComponent } from './principal-dashboard/principal-dashboard.component';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
   path: 'dashboard',
   component: PrincipalDashboardComponent,
   pathMatch: 'full'
  }
];


@NgModule({
  declarations: [PrincipalDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PrincipalDashboardModule { }
