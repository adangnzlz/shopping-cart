import { NgModule } from '@angular/core';
import { ImageApiPipe } from './pipes/imageapi.pipe';


@NgModule({
    declarations: [
        ImageApiPipe
    ],
    imports: [
    ],
    exports: [ImageApiPipe]
})
export class CrossModule {}

