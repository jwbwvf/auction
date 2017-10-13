import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

export class Product {
    constructor(
        public id: string,
        public title: string,
        public price: number,
        public description: string
    ) {}
}

@Injectable()
export class ProductService {
     constructor(private http: Http) {
         //let products = http.get('./products.json').map((res:any) => res.json()).catch((error:any) => console.log(error));
     }

    getProduct(): Product {
        return new Product("0", "galaxy 7", 249.99, "The latest galaxy, 7-inch screen");
    }
}