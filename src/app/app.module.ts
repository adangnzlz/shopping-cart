import { FormsModule } from '@angular/forms';
import { SpinnerModule } from 'angular2-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { CoreModule } from './core-module/core.module';
import { CommonUtilModule } from './shared-modules/common-util/common-util.module';
import { CrossModule } from './featured-modules/cross-module/cross.module';
import { HomeModule } from './featured-modules/home-module/home.module';
import { shopcartReducer } from './model/reducers/shopcart.reducers';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ],
  imports: [
    CoreModule,
    CommonUtilModule,
    HomeModule,
    StoreModule.forRoot({
      shopcart: shopcartReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10 // number of states to retain
    }),
    SpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
