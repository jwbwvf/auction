import {Observable} from 'rxjs/Observable';

export class CustomObservableService {
    id: number;
    createObservableService(id: number): Observable<number>{// Observable<Date>{
        this.id = id;
        return new Observable(
            observer => {
                //setInterval(() => 
                //     observer.next(new Date()), 1000);
                observer.next(this.id);
            }
        );
    }
}