import { FormsModule } from '@angular/forms';
import { SpinnerModule } from 'angular2-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewComponent } from './pages/overview/overview.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './app.component';

import { StoreModule, Store } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { LoaderService } from './services/loader.service';
import { postReducer } from './common/reducers/post.reducers';
import { ConfigurableRESTService } from './services/common/configurable.rest.service';
import { HeaderInterceptor } from './services/common/http.interceptor';
import { DiscoverService } from './services/discover.service';
import { ImageApiPipe } from './pipes/imageapi.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ImageApiPipe,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      post: postReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10 // number of states to retain
    }),
    SpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
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
  bootstrap: [AppComponent]
})
export class AppModule { }
