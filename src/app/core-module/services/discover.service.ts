import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfigurableRESTService } from './common/configurable.rest.service';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../../../environments/globar.vars';

@Injectable()
export class DiscoverService extends ConfigurableRESTService {

    constructor(http: HttpClient) {
        super(http, endpoints.discover);
    }
}
