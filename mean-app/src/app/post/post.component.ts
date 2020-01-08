import { Component, OnInit } from '@angular/core';
import {PostModel} from "./post-model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title = 'mean-app';
  AllPosts: PostModel[];

  constructor() { }

  ngOnInit() {
  }

  addedPost(posts: PostModel[]) {
    this.AllPosts = posts;
  }
}
