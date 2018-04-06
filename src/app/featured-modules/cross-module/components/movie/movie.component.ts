import { AddItem, RemoveItem } from '../../../../model/actions/shopcart.actions';
import { AppState } from '../../../../model/app.state';
import { Component, HostListener, Input } from '@angular/core';
import { Dataset } from '../../../../model/models/dataset.model';
import { DiscoverService } from '../../../../core-module/services/discover.service';
import { environment } from '../../../../../environments/environment';
import { LoaderService } from '../../../../core-module/services/loader.service';
import { Movie } from '../../../../model/models/movie.model';
import { NgLog } from '../../../../shared-modules/common-util/decorators/nglog.decorator';
import { Observable } from 'rxjs/Observable';
import { ShopCart } from '../../../../model/models/shopcart.model';
import { Store } from '@ngrx/store';
import { fade } from '../../../../shared-modules/common-util/animations';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  animations: [fade],
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  shopcart: Observable<ShopCart>;
  _active = false;
  fade = 'out';
  @Input() movie: Movie;
  @Input() template = 'poster_path';
  @Input('active')
  set active(value: boolean) {
    this._active = value;
    if (value && window.innerWidth > 768) {
      this.loaderService.displayLoader(true);
    }
  }
  loaded = false;

  constructor(private store: Store<AppState>, private discoverService: DiscoverService, private loaderService: LoaderService) {
    this.shopcart = this.store.select('shopcart');
  }

  addItem(id: number) {
    this.store.dispatch(new AddItem(id));
  }

  removeItem(id: number) {
    this.store.dispatch(new RemoveItem(id));
  }


  load() {
    this.loaded = true;
    this.fade = 'in';
    this.loaderService.displayLoader(false);
  }


}

