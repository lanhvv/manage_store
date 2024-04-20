import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { UserFormComponent } from './user/user-form/user-form.component';

const routes: Routes = [
  {
    path:"", component:AdminComponent,
    children: [
      {path:"customers", component: UserComponent},
      {path:"customers/create", component:UserFormComponent},
      {path:"employees", component: UserComponent},
      {path:"employees/create", component:UserFormComponent},
      {path:"products", component:ProductComponent},
      {path:"products/create", component:ProductFormComponent},
      {path:"products/update/:id", component:ProductFormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
