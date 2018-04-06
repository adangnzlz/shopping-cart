import { Pipe, PipeTransform } from '@angular/core';
import { baseApiUrlImages } from '../../../../environments/globar.vars';
@Pipe({
    name: 'imageApi'
})
export class ImageApiPipe implements PipeTransform {
    transform(value: string, args: any[]): string {
        if (value === null) {
            return 'Not assigned';
        }
        let defaultSize = window.innerWidth > 768 ? '/w300' : '/w154';
        if (args) {
            defaultSize = args[0];
        }
        return baseApiUrlImages + defaultSize + value;
    }
}
