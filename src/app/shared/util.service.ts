export class Util {
    static getFullnameProduct(type:any, name:any, code: any) {
        return `[${type}] - ${name} - ${code}`;
    }

    static getPriceAfterDiscount(price: any, discount: any) {
        return price - ((price*discount)/100);
    } 
}