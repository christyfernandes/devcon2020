import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherModuleComponent } from './teacher-module/teacher-module.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
   path: 'dashboard',
   component: TeacherModuleComponent,
   pathMatch: 'full'
  }
];

@NgModule({
  declarations: [TeacherModuleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class TeacherDashboardModule { }
