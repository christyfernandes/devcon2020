import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherDashboardModule } from './teacher-dashboard/teacher-dashboard.module';
import { LayoutModule } from './layout/layout.module';
import { TimeTableComponent } from './time-table/time-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    TeacherDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
