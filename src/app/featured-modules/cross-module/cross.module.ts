import { NgModule } from '@angular/core';
import { ImageApiPipe } from './pipes/imageapi.pipe';
import { MovieComponent } from './components/movie/movie.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        ImageApiPipe,
        MovieComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [ImageApiPipe, MovieComponent]
})
export class CrossModule { }

