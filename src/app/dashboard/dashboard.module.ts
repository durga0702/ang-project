import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ComponentsRoutingModule } from '../components/components-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
  ],
  exports:[
    DashboardComponent,
    NavBarComponent
  ]
})
export class DashboardModule { }
