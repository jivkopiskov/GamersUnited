import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCategories } from 'src/app/posts//all-categories/all-categories.component';
import { RouterModule } from '@angular/router';
import { AddNewPostComponent } from 'src/app/posts/add-new-post/add-new-post.component';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { PostsListComponent } from './posts-list/posts-list.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpClientModule } from '@angular/common/http';
import { VotesComponent } from './votes/votes.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { SharedModule } from '../shared/shared.module';
import { PostSummaryComponent } from './post-summary/post-summary.component';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';

@NgModule({
  declarations: [
    AllCategories,
    AddNewPostComponent,
    PostsListComponent,
    VotesComponent,
    PostDetailsComponent,
    PostSummaryComponent,
    CommentComponent,
    AddCommentComponent
  ],
  exports: [
    AllCategories,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    EditorModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule.forChild([
      { path: 'all-categories', component: AllCategories, canActivate: [AuthorizeGuard] },
      { path: 'posts/:categoryId', component: PostsListComponent, canActivate: [AuthorizeGuard] },
      { path: 'add-new-post', component: AddNewPostComponent, canActivate: [AuthorizeGuard] },
      { path: 'post/:postId', component: PostDetailsComponent, canActivate: [AuthorizeGuard] },
    ])
  ]
})
export class PostsModule { }
