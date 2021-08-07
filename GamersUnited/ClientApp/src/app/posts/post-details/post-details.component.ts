import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PostsService } from '../../core/posts.service';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { IComment } from '../Interfaces/IComment';
import { IPostSummary } from '../Interfaces/IPostSummary';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  public post: IPostSummary;
  public comments: IComment[];
  public loadingComments = true;
  constructor(private route: ActivatedRoute, private postsService: PostsService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(x => this.postsService.getPost(x.postId))
    )
      .subscribe(x => {
        this.post = x;
        this.loadComments();
      });
  }

  loadComments() {
    this.postsService.getComments(this.post.id).subscribe(x => {
      this.comments = x;
      this.loadingComments = false;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddCommentComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(commentText => {
      if (commentText) {
        this.loadingComments = true; 
        this.postsService.addComment(this.post.id, commentText).subscribe(x => this.loadComments())
      }
    });
  }
}

