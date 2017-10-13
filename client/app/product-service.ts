import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    constructor(private http: Http) {}

    //This method forms the URL, but it doesn't invoke the subscribe() method.
    //It returns an Observable object.
    //The component that handles the data will provide the observer as in invoke with subscribe
    getProductByID(productID: string): Observable<any>{
        return this.http.get(`/products/${productID}`).map(res => res.json());
    }
}