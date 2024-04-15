import { Injectable } from "@angular/core";
import sizes from "../data/size.json";

@Injectable({providedIn: 'root'})
export class ProductService {

    public getSizes() {
        return sizes;
    }
}