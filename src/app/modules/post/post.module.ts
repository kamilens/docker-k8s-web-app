import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';


@NgModule({
  declarations: [PostListComponent, PostDetailsComponent],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
