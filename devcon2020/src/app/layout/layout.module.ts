import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, DashboardPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, SidebarComponent, DashboardPanelComponent]
})
export class LayoutModule { }
