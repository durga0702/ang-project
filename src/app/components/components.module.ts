import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { RegistrationComponent } from './registration/registration.component';
import { SharedComponentModule } from '../shared-components/shared-component.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ComponentsComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    DashboardModule,
    SharedComponentModule,
    ],
  exports:[
  ],
 })
export class ComponentsModule { }
