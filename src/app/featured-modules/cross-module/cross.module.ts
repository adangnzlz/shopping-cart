import {SpinnerModule} from 'angular2-spinner';
import { NgModule } from '@angular/core';
import { ImageApiPipe } from './pipes/imageapi.pipe';
import { MovieComponent } from './components/movie/movie.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickStopPropagationDirective } from './pipes/stoppropagation.directive';


@NgModule({
    declarations: [
        ImageApiPipe,
        MovieComponent,
        ClickStopPropagationDirective
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        SpinnerModule
    ],
    exports: [ImageApiPipe, MovieComponent, ClickStopPropagationDirective]
})
export class CrossModule { }

