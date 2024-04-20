import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ConfirmComponent } from './confirm/confirm.component';
import { ModelBasicComponent } from './model-basic/model-basic.component';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ConfirmComponent,
    ModelBasicComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ButtonModule
  ],
  exports: [
    ConfirmComponent,
    ModelBasicComponent
  ],
  providers: [MessageService]
})
export class NotifyToastModule { }
