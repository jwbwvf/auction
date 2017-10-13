import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'product',
    template: `<h1 class="product">Product Details for Product: {{ productID }}</h1>`,
    styles: ['.product {background: cyan}']
})
export class ProductDetailComponentParam {
    productID: string;
    isProdEnvironment: boolean;

    constructor(route: ActivatedRoute) {
        this.productID = route.snapshot.params['id'];

        if (route.snapshot.data && route.snapshot.data[0] && route.snapshot.data[0]['isProd']) {
            this.isProdEnvironment = route.snapshot.data[0]['isProd'];
            console.log("this.isProdEnvironment = " + this.isProdEnvironment);
        }
    }
}