import { Component, OnInit, SecurityContext } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { filter, tap, switchMap } from 'rxjs/operators';
import { PostsService } from 'src/app/core/posts.service';
import { IPostSummary } from '../Interfaces/IPostSummary';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  public posts: IPostSummary[];
  pageIndex: number = 0;
  categoryId: number;
  lenght: number;
  constructor(private route: ActivatedRoute, private postsService: PostsService, private router: Router) { }

  test$ = this.route.params.pipe(tap((x) => {
    this.posts = null;
    this.categoryId = x.categoryId
  }), switchMap(x => this.postsService.getPostsCount(this.categoryId)),
    tap(x => this.lenght = x));

  test2$ = this.route.queryParams.pipe(tap(x => this.pageIndex = x.page));


  ngOnInit(): void {
    combineLatest([this.test$, this.test2$]).pipe(
      switchMap(() => this.postsService.getPostsByCategory(this.categoryId, this.pageIndex)))
      .subscribe(x => this.posts = x)

  }



  handlePageEvent(event: PageEvent) {
    this.router.navigate([], { queryParams: { page: event.pageIndex } });
  }

}
