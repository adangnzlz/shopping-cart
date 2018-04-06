import { Component, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Dataset } from '../../../../model/models/dataset.model';
import { NgLog } from '../../../../shared-modules/common-util/decorators/nglog.decorator';
import { AppState } from '../../../../model/app.state';
import { DiscoverService } from '../../../../core-module/services/discover.service';
import { environment } from '../../../../../environments/environment';
import { ShopCart } from '../../../../model/models/shopcart.model';
import { AddItem, RemoveItem } from '../../../../model/actions/shopcart.actions';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
@NgLog(environment)
export class OverviewComponent {

  popularMovies: Dataset = new Dataset();
  shopcart: Observable<ShopCart>;

  text: string;

  constructor(private store: Store<AppState>, private discoverService: DiscoverService) {
    this.shopcart = this.store.select('shopcart');
    this.getPopularMovies();
  }

  addItem(id: number) {
    this.store.dispatch(new AddItem(id));
  }

  removeItem(id: number) {
    this.store.dispatch(new RemoveItem(id));
  }

  getPopularMovies() {
    this.discoverService.get().subscribe((result: Dataset) => {
      this.popularMovies = result;
    });
  }


}
