import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home';
import {ProductDetailComponent} from './components/product';
import {LuxuryModule} from './components/luxury/luxury.module';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'product', component: ProductDetailComponent}
];

@Component({
    selector: 'app',
    template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/product']">Product Details</a>
        <a [routerLink]="['/luxury']">Luxury Items</a>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {}

@NgModule({
    imports: [BrowserModule, LuxuryModule, RouterModule.forRoot(routes)],
    declarations: [AppComponent, HomeComponent, ProductDetailComponent],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);