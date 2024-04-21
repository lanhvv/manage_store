import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';
import { Util } from 'src/app/shared/util.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  isUpdate : boolean;
  form: FormGroup;
  users: any[] = [];
  Util = Util;
  roles: any[] = [{key:"customer" ,value: "Khánh hàng"},{key:"employee" ,value: "Nhân viên"}];

  constructor(private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.isUpdate = false;
    this.users = this.userService.getUsers();
    this.form = new FormGroup({
      "name": new FormControl("", [Validators.required]),
      "img":new FormControl(""),
      "birthday": new FormControl(new Date(), [Validators.required]),
      "email": new FormControl("", [Validators.required, Validators.email]),
      "password": new FormControl("", [Validators.required])
    });
    debugger

  }

  ngOnInit(): void {
    this.isUpdate = this.route.snapshot.params?.['id'] ? true : false;

    if (this.isUpdate) {
      const user = this.users.filter((x: any) => x?.id == this.route.snapshot.params?.['id'])?.[0];
      Object.keys(user).forEach((x: any) => {
        const control = this.control(x);
        let value : any = user?.[x];
        if (control?.value instanceof Date) {
          value = new Date(user?.[x]);
        }

        if (control) {
          control.setValue(value);
        }
      });
    }
  }

  public control(name: string) {
    return this.form.get(name);
  }
}
