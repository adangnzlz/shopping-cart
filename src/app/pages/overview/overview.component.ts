import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { EditText, Reset, Upvote, Downvote } from '../../common/actions/post.actions';
import { Post } from '../../common/models/post.model';
import { AppState } from '../../common/app.state';
import { endpoints } from '../../../environments/globar.vars';
import { DiscoverService } from '../../services/discover.service';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  providers: [
    DiscoverService,
    { provide: 'ENDPOINT', useValue: endpoints.discover }
  ]
})
export class OverviewComponent {

  post: Observable<Post>;

  text: string; /// form input val

  constructor(private store: Store<AppState>, private discoverService: DiscoverService) {
    this.post = this.store.select('post');
    this.discoverService.get().subscribe(result => {
      console.log(result);
    });
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
}
