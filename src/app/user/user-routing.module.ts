import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'', component: UserComponent,
    children: [
      {path:'home-page', component: HomePageComponent},
      {path:'products', component: ProductComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
