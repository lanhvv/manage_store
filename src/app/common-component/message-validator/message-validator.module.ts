import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageValidatorComponent } from './message-validator/message-validator.component';



@NgModule({
  declarations: [
    MessageValidatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MessageValidatorComponent
  ]
})
export class MessageValidatorModule { }
