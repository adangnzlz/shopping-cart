import { NgModule } from '@angular/core';
import { Store } from '@ngrx/store';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { ConfigurableRESTService } from './services/common/configurable.rest.service';
import { DiscoverService } from './services/discover.service';
import { HeaderInterceptor } from './services/common/http.interceptor';


@NgModule({
    imports: [],
    providers: [
        LoaderService,
        ConfigurableRESTService,
        DiscoverService,
        Store,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HeaderInterceptor,
            multi: true
        }],
    declarations: []
})
export class CoreModule {}

