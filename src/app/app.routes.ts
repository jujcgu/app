import { Routes } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { LoginForm } from './login-form/login-form';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'address-form', component: AddressFormComponent },
  { path: 'table', component: TableComponent },
  { path: 'login', component: LoginForm },
];
