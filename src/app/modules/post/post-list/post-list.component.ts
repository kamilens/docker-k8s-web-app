import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {Post} from '../../../core/models/Post.model';
import {PostService} from '../../../core/services/post.service';
import {mergeMap, takeUntil} from 'rxjs/operators';

export enum ViewMode {
  LIST, GRID
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  public posts: Observable<{active: boolean, content: Post}[]>;
  public ViewMode = ViewMode;
  public viewMode = ViewMode.LIST;
  private unsubscribeAll$ = new Subject<any>();

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  private getAllPosts(): void {
    this.posts = this.postService
      .getAll()
      .pipe(
        takeUntil(this.unsubscribeAll$),
        mergeMap((posts: Post[]) => {
          return of(posts.map(post => ({
            active: false,
            content: post
          })));
        })
      );
  }

  public switchViewMode(viewMode: ViewMode): void {
    this.viewMode = viewMode;
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

}
