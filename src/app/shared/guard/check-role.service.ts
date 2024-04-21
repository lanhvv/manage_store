import { Injectable } from "@angular/core";
import { Util } from "../util.service";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Enums } from "../Enums.service";

@Injectable({
    providedIn: 'root'
})
export class CheckRole implements CanActivate {
    Util = Util;
    Enums = Enums;

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log("hehehehehhehehehhehehehe");
        debugger
        const user = JSON.parse(this.Util.getSessionStorage("account"));
        if (user?.role == this.Enums.CUSTOMER && route.routeConfig?.path == this.Enums.USER) {
            return true;
        } else if ((user?.role == this.Enums.EMPLOYEE || user?.role == this.Enums.ADMIN) && route.routeConfig?.path == this.Enums.ADMIN) {
            return true;
        } else {
            this.router.navigate(["/login"]);
            return false;
        }
    }
}