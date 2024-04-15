import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselModule } from 'primeng/carousel';
import { CollectionComponent } from './home-page/collection/collection.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    UserComponent,
    HomePageComponent,
    CollectionComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    BadgeModule,
    InputTextModule,
    ButtonModule,
    CarouselModule
  ]
})
export class UserModule { }
