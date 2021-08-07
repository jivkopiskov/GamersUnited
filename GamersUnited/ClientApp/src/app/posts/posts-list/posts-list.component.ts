import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PostsService } from 'src/app/core/posts.service';
import { IPostSummary } from '../Interfaces/IPostSummary';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  public posts: IPostSummary[];
  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      tap(() => this.posts = null),
      switchMap(x => this.postsService.getPostsByCategory(x.categoryId))
    )
      .subscribe(x => this.posts = x);
  }

}
