import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/core/posts.service';
import { ICategory } from '../Interfaces/ICategory';

@Component({
  selector: 'all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategories implements OnInit {

  public columnsToDisplay = ['name', 'description'];
  public cateogries: ICategory[];
  public data: MatTableDataSource<ICategory>;
  public loading = true;
  constructor(private postsService: PostsService, private router: Router) {
    this.postsService.getAllCategories().subscribe(x => {
      this.cateogries = x;
      this.data = new MatTableDataSource(this.cateogries);
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  handleClick(row: ICategory) {
    if (row && row.id) {
      this.router.navigate(['/posts', row.id], { queryParams: { page: 0 } })
    }
  }

}
