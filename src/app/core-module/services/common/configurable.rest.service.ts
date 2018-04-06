
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { baseApiUrl, apiKey } from '../../../../environments/globar.vars';

@Injectable()
export class ConfigurableRESTService {

    private configurableUrl: string;

    constructor(private http: HttpClient, @Inject('ENDPOINT') public url: string) {
        this.configurableUrl = baseApiUrl + url + apiKey;
    }

    get(): Observable<any> {
        return this.http.get(this.configurableUrl);
    }

    getById(id): Observable<any> {
        return this.http.get(`${this.configurableUrl}/${id}`);
    }

    post(body): Observable<any> {
        return this.http.post(this.configurableUrl, body);
    }

    put(id, body): Observable<any> {
        return this.http.post(`${this.configurableUrl}/${id}`, body);
    }

    delete(id): Observable<any> {
        return this.http.delete(`${this.configurableUrl}/${id}`);
    }


}
