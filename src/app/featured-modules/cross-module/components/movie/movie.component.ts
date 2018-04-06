import { Component, HostListener, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Dataset } from '../../../../model/models/dataset.model';
import { NgLog } from '../../../../shared-modules/common-util/decorators/nglog.decorator';
import { AppState } from '../../../../model/app.state';
import { DiscoverService } from '../../../../core-module/services/discover.service';
import { environment } from '../../../../../environments/environment';
import { ShopCart } from '../../../../model/models/shopcart.model';
import { AddItem, RemoveItem } from '../../../../model/actions/shopcart.actions';
import { Movie } from '../../../../model/models/movie.model';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  shopcart: Observable<ShopCart>;

  @Input() movie: Movie;
  @Input() template = 'poster_path';
  text: string;

  constructor(private store: Store<AppState>, private discoverService: DiscoverService) {
    this.shopcart = this.store.select('shopcart');
  }

  addItem(id: number) {
    this.store.dispatch(new AddItem(id));
  }

  removeItem(id: number) {
    this.store.dispatch(new RemoveItem(id));
  }



}

