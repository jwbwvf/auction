import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'product',
    template: `
        <div class="product">
            <h1>Product Details for Product: {{ productID }}</h1>
            <router-outlet></router-outlet>
            <p><a [routerLink]="['./seller', 5678] ">Seller Info</a></p>
        </div>
    `,
    styles: ['.product {background: cyan}']
})
export class ProductDetailComponent {
    productID: string;

    constructor(route: ActivatedRoute) {
        this.productID = route.snapshot.params['id'];
    }
}