import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherModuleComponent } from './teacher-module/teacher-module.component';
import { Routes, RouterModule } from '@angular/router';
import { StaffListComponent } from './staff-list/staff-list.component';

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
  },
  {
    path: 'staff-list',
    component: StaffListComponent,
    pathMatch: 'full'
   }
];

@NgModule({
  declarations: [TeacherModuleComponent, StaffListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class TeacherDashboardModule { }
