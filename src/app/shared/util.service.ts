export class Util {
    static getFullnameProduct(type:any, name:any, code: any) {
        return `[${type}] - ${name} - ${code}`;
    }

    static getPriceAfterDiscount(price: any, discount: any) {
        return price - ((price*discount)/100);
    } 

    static getSessionStorage(key: string) {
        return sessionStorage.getItem(key);
    }

    static setSessionStorage(key: string, body: any) {
        return sessionStorage.setItem(key, body);
    }

    static removeSessionStorage(key: string) {
        sessionStorage.removeItem(key);
    }

    static clearSessionStorage() {
        sessionStorage.clear();
    }
}