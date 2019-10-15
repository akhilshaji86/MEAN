import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PostModel} from "../post-model";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  addedPost: string;
  posts: PostModel[] = [];
  @Output() postAddedEvent: EventEmitter<PostModel[]> = new EventEmitter();

  constructor() {
  }

  postTitle: string;

  ngOnInit() {
  }

  onAddPost() {
    this.posts.push({
      title: this.postTitle,
      content: this.addedPost
    });
    this.clearFeilds();
    this.postAddedEvent.emit(this.posts);
  }

  private clearFeilds() {
    this.postTitle = this.addedPost = '';
  }
}
