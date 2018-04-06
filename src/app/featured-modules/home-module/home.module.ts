import { NgModule } from '@angular/core';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { MenuComponent } from '../../layouts/menu/menu.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { CrossModule } from '../cross-module/cross.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        OverviewComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        CrossModule
    ],
    exports: [HeaderComponent,
        FooterComponent,
        MenuComponent,
        OverviewComponent]
})
export class HomeModule { }

