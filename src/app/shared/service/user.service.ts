import { Injectable } from "@angular/core";
import users from "../data/user.json";

@Injectable({providedIn: 'root'})
export class UserService {

    public getUsers() {
        return users;
    }
} 