import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherModuleComponent } from './teacher-module/teacher-module.component';
import { Routes, RouterModule } from '@angular/router';
import { StaffListComponent } from './staff-list/staff-list.component';
import { TeacherSideMenuComponent } from './teacher-side-menu/teacher-side-menu.component';
import { LayoutModule } from '../layout/layout.module';

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
  declarations: [TeacherModuleComponent, StaffListComponent, TeacherSideMenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule
  ],
})
export class TeacherDashboardModule { }
