import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PostModel} from "../post-model";
import {Utility} from '../../util/util'
import {NgForm} from "@angular/forms";
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
  utility = new Utility();

  ngOnInit() {
  }

  onAddPost(postForm: NgForm) {
    if(postForm.invalid)return;
    this.posts.push({
      title: postForm.value.title,
      content: postForm.value.postInput
    });
    this.postAddedEvent.emit(this.posts);
    this.clearFields(postForm);
  }

  private clearFields(postForm) {
    postForm.form.reset();
  }
}
