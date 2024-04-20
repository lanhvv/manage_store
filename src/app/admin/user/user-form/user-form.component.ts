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

  constructor(private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.isUpdate = false;
    this.users = this.userService.getUsers();
    this.form = new FormGroup({
      "name": new FormControl("", [Validators.required]),
      "img":new FormControl(""),
      "role": new FormControl("", [Validators.required]),
      "birthday": new FormControl(new Date(), [Validators.required]),
      "email": new FormControl("", [Validators.required, Validators.email]),
      "password": new FormControl("", [Validators.required])
    });
  }

  ngOnInit(): void {
    this.isUpdate = this.route.snapshot.params?.['id'] ? true : false;

    if (this.isUpdate) {
      const user = this.users.filter((x: any) => x?.id == this.route.snapshot.params?.['id'])?.[0];
      Object.keys(user).forEach((x: any) => {
        const control = this.control(x);
        if (control) {
          control.setValue(user?.[x]);
        }
      });
    }
  }

  public control(name: string) {
    return this.form.get(name);
  }
}
