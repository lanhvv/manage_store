import { Injectable } from "@angular/core";
import types from "../data/type.json";

@Injectable({providedIn: 'root'})
export class TypeService {

    public getTypes() {
        return types;
    }
}