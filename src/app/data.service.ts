import { Injectable } from '@angular/core';
import {
    throwError as observableThrowError,
    Observable, BehaviorSubject, throwError
} from 'rxjs';
import {
    HttpErrorResponse,
    HttpClient,
    HttpHeaders,
    HttpParams
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DataService {

    constructor(private httpClient: HttpClient) {

    }

    addObject(url: string, body: string): Observable<any> {
        // if (url !== '' && url != null) {
        //     if (body !== '' && body != null) {

        //   const headers = new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   });

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this.httpClient.post<any>(url, body, httpOptions)
            .pipe(
                catchError(res => this.handleError(res))
            );
        // } else {
        // const errorMessage = 'Please send the object in body to add';
        // return observableThrowError(errorMessage);
    }
    // } else {
    //     const errorMessage = 'Url cannot be null or empty';
    //     return observableThrowError(errorMessage);
    // }
    // }

    private handleError(error: HttpErrorResponse) {
        console.log( 'error ' + JSON.stringify(error));
        return throwError(error.error.message);

    }

}
