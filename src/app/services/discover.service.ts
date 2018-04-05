import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { baseApiUrl } from '../../environments/globar.vars';
import { ConfigurableRESTService } from './common/configurable.rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DiscoverService extends ConfigurableRESTService {

    constructor(http: HttpClient, @Inject('ENDPOINT') public ENDPOINT: string) {
        super(http, ENDPOINT);
    }
}
