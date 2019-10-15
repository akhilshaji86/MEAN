import {Component} from '@angular/core';
import {PostModel} from "./post/post-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mean-app';
  AllPosts: PostModel[];

  addedPost(posts: PostModel[]) {
    this.AllPosts = posts;
  }
}
