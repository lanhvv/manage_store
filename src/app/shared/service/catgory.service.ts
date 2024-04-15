import { Injectable } from "@angular/core";
import categories from "../data/category.json";

@Injectable({providedIn: 'root'})
export class CategoryService {
    public getCategories() {
        return categories;
    }
}