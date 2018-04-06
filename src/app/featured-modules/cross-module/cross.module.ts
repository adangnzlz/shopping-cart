import { NgModule } from '@angular/core';
import { ImageApiPipe } from './pipes/imageapi.pipe';
import { MovieComponent } from './components/movie/movie.component';


@NgModule({
    declarations: [
        ImageApiPipe,
        MovieComponent
    ],
    imports: [
    ],
    exports: [ImageApiPipe, MovieComponent]
})
export class CrossModule {}

