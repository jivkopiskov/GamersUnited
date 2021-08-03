import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCategories } from 'src/app/posts//all-categories/all-categories.component';
import { RouterModule } from '@angular/router';
import { AddNewPostComponent } from 'src/app/posts/add-new-post/add-new-post.component';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { PostsListComponent } from './posts-list/posts-list.component';

@NgModule({
  declarations: [
    AllCategories,
    AddNewPostComponent,
    PostsListComponent
  ],
  exports: [
    AllCategories,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: 'all-categories', component: AllCategories, canActivate: [AuthorizeGuard] },
      { path: 'category/:categoryId', component: PostsListComponent, canActivate: [AuthorizeGuard] },
      { path: 'add-new-post', component: AddNewPostComponent, canActivate: [AuthorizeGuard] },
    ])
  ]
})
export class PostsModule { }
