import { Injectable } from "@angular/core";
import prouducts from "../data/product.json";

@Injectable({providedIn: 'root'})
export class ProductService {

    public getProducts() {
        return prouducts;
    }
}