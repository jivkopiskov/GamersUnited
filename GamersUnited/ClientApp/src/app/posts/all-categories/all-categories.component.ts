import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PostsServiceService as PostsService } from 'src/app/core/posts.service';
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
  constructor(private postsService: PostsService, private router: Router) { }

  async ngOnInit() {
    this.cateogries = await this.postsService.getAllCategories();
    this.data = new MatTableDataSource(this.cateogries);
  }

  handleClick(row: ICategory) {
    if (row && row.id) {
      this.router.navigate(['/category', row.id])
    }
  }

}
