import {NgModule, Component} from '@angular/core';
import ProductComponent from './components/product';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

class Product {
    constructor(public title: string) {}
}

class ProductService {
    getProduct() : Product {
        // Code making an HTTP request to get actual product details would go here
        return new Product('iPhone 7');
    }
}

class MockProductService implements ProductService {
    getProduct() : Product {
        return new Product('Galaxy 7');
    }
}

@Component({
    selector: 'product1',
    template: '{{product.title}}'

})
class Product1Component {
    product: Product;

    constructor(private productService: ProductService) {
        this.product = productService.getProduct();
    }
}

@Component({
    selector: 'product2',
    template: '{{product.title}}',
    providers: [{provide: ProductService, useClass: MockProductService}]
})
class Product2Component {
    product: Product;

    constructor(private productService: ProductService) {
        this.product = productService.getProduct();
    }
}


@Component({
    selector: 'app',
    template: `
            <h2>A root component hosts two products<br>provided by different services</h2>
            <product1></product1>
            <br>
            <product2></product2>
        `
})
class AppComponent {}

@NgModule({
    imports: [BrowserModule/*, HttpModule*/],
    providers: [{provide: ProductService, useClass: MockProductService}],
    declarations: [AppComponent, Product1Component, Product2Component],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);