import { Component } from '@angular/core';
import { Util } from '../shared/util.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  isShow = false;
  Util = Util;

  public getName() {
    return JSON.parse(this.Util.getSessionStorage("account"))?.name;
  }
}
