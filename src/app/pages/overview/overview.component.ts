import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { EditText, Reset, Upvote, Downvote } from '../../common/actions/post.actions';
import { Post } from '../../common/models/post.model';
import { AppState } from '../../common/app.state';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  post: Observable<Post>;

  text: string; /// form input val

  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post');
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
