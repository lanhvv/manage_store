import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/service/user.service';
import { Router } from '@angular/router';
import { Util } from '../shared/util.service';
import { Enums } from '../shared/Enums.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Enums = Enums;
  Util = Util;
  form : FormGroup;
  isLoginSuccess: boolean = true;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.form = new FormGroup({
      email : new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.pattern("\\w{6,}")])
    });
  }


  public control(name: string) {
    return this.form.get(name);
  }

  public login() {
    const user = this.userService.getUsers().filter((x: any) => {
      if (x?.email == this.control("email")?.value && x?.password == this.control("password")?.value) {
        return true;
      }
      return false;
    })?.[0];

    this.isLoginSuccess = user ? true : false;
    if (this.isLoginSuccess) {
      this.Util.setSessionStorage("account", JSON.stringify(user));
      if (user?.role == this.Enums.CUSTOMER) {
        this.router.navigate(["/user/home-page"]);
      } else {
        this.router.navigate(["admin/products"]);
      }
    }
  }
}
