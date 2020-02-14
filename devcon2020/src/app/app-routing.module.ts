import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'teacher',
    pathMatch: 'full'
  },
  {
    path: 'teacher',
    loadChildren: './teacher-dashboard/teacher-dashboard.module#TeacherDashboardModule'
  },
  {
    path: 'principal',
    loadChildren: './principal-dashboard/principal-dashboard.module#PrincipalDashboardModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
