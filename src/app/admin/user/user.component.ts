import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Enums } from 'src/app/shared/Enums.service';
import { UserService } from 'src/app/shared/service/user.service';
import { Util } from 'src/app/shared/util.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  Util = Util;
  Enums = Enums;
  users: any[] = [];
  title: string = "";

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {
      const role = this.route.snapshot.routeConfig?.path == Enums.CUSTOMERS ? Enums.CUSTOMER : Enums.EMPLOYEE;
      this.title = role == Enums.CUSTOMER ? Enums.CUSTOMER_TITLE : Enums.EMPLOYEE_TITLE;
      this.users = this.userService.getUsers().filter((x: any) => role == x?.role);
      debugger
  }
}
