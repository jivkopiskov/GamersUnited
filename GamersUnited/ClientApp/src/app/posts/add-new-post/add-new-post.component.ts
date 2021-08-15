import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService as PostsService } from 'src/app/core/posts.service';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Interfaces/ICategory';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {

  title: string;
  body: string;
  category: number;
  categories: ICategory[];
  key = environment.tinyMCEkey;
  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsService.getAllCategories().subscribe(x => this.categories = x);
  }

  async onSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      var post = { id: null, body: this.body, title: this.title, categoryId: this.category }
      await this.postsService.createPost(post).toPromise();
      this.router.navigate(['posts', this.category], { queryParams: { page: 0 } })
    }
  }
}
