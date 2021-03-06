import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../post-model";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() posts: PostModel[];

  constructor() { }

  ngOnInit() {
  }

  deletePost(index: number) {
    this.posts.splice(index,1);
  }
}
