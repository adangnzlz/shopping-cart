import { Component, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { EditText, Reset, Upvote, Downvote } from '../../common/actions/post.actions';
import { Post } from '../../common/models/post.model';
import { AppState } from '../../common/app.state';
import { endpoints } from '../../../environments/globar.vars';
import { DiscoverService } from '../../services/discover.service';
import { NgLog } from '../../decorators/nglog.decorator';
import { Movie } from '../../common/models/movie.model';
import { Dataset } from '../../common/models/dataset.model';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  providers: [
    DiscoverService,
    { provide: 'ENDPOINT', useValue: endpoints.discover }
  ]
})
@NgLog()
export class OverviewComponent {

  popularMovies: Dataset = new Dataset();
  post: Observable<Post>;

  text: string;

  constructor(private store: Store<AppState>, private discoverService: DiscoverService) {
    this.post = this.store.select('post');
    this.getPopularMovies();
  }



  editText() {
    this.store.dispatch(new EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new Reset());
  }

  upvote() {
    this.store.dispatch(new Upvote());
  }

  downvote() {
    this.store.dispatch(new Downvote());
  }

  getPopularMovies() {
    this.discoverService.get().subscribe((result: Dataset) => {
      this.popularMovies = result;
    });
  }


}
