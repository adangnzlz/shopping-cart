import { NgModule } from '@angular/core';
import { OverviewComponent } from './pages/overview/overview.component';
import { CrossModule } from '../cross-module/cross.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        OverviewComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        CrossModule
    ],
    exports: [OverviewComponent]
})
export class HomeModule { }

