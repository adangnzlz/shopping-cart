import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoaderService {
    public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    displayLoader(value: boolean) {
        setTimeout(() => {
            this.loaderStatus.next(value);
        }, 10);
    }
}
