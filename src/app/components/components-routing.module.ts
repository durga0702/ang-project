import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: ComponentsComponent },
  { path: 'register', component:RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
