import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CheckRole } from './shared/guard/check-role.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin', canActivate: [CheckRole] , loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'user', canActivate: [CheckRole] , loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
