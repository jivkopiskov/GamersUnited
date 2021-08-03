import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor(private postsService: PostsService) { }

  async ngOnInit(): Promise<void> {
    this.categories = await this.postsService.getAllCategories();
  }

  async onSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      var post = { id: null, body: this.body, title: this.title, categoryId: this.category }
      await this.postsService.createPost(post);
    }
    //TODO redirect to post (possibly upvote as well)
  }
}
