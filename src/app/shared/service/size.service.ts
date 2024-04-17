import { Injectable } from "@angular/core";
import sizes from "../data/size.json";

@Injectable({providedIn: 'root'})
export class SizeService {

    public getSizes() {
        return sizes;
    }
}