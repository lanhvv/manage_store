import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageValidatorModule } from '../common-component/message-validator/message-validator.module';
import { NotifyToastModule } from '../common-component/notify-toast/notify-toast.module';
import { UserFormComponent } from './user/user-form/user-form.component';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    EmployeeComponent,
    ProductComponent,
    ProductFormComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ChipModule,
    TagModule,
    ReactiveFormsModule,
    MultiSelectModule,
    DropdownModule,
    InputNumberModule,
    MessageValidatorModule,
    NotifyToastModule,
    CalendarModule
  ]
})
export class AdminModule { }
