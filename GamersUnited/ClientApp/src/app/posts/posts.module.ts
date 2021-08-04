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
import { EditorModule } from '@tinymce/tinymce-angular';

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
    FormsModule,
    EditorModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    RouterModule.forChild([
      { path: 'all-categories', component: AllCategories, canActivate: [AuthorizeGuard] },
      { path: 'posts/:categoryId', component: PostsListComponent, canActivate: [AuthorizeGuard] },
      { path: 'add-new-post', component: AddNewPostComponent, canActivate: [AuthorizeGuard] },
    ])
  ]
})
export class PostsModule { }
