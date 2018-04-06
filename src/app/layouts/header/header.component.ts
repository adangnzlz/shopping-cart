import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { ShopCart } from '../../model/models/shopcart.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../../model/app.state';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output() toggle: EventEmitter<any>;

    shopcart: Observable<ShopCart>;

    constructor(private store: Store<AppState>) {
        this.shopcart = this.store.select('shopcart');
        this.toggle = new EventEmitter();
    }
    ngOnInit() {
    }

    // sample host listener
    // @HostListener('mouseover') onMouseOver() {
    //     console.log('hover');
    // }

    onToggle() {
        this.toggle.emit();
    }
}
