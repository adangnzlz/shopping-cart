import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = {
            'Content-Type': 'application/json'
        };
        const clone = req.clone({ setHeaders: headers });

        return next.handle(clone);
    }


}

