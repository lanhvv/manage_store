import { Injectable } from "@angular/core";
import colors from "../data/color.json";

@Injectable({providedIn: 'root'})
export class ColorService {

    public getColors() {
        return colors;
    }
}