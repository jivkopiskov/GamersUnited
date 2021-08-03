import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService as PostsService } from 'src/app/core/posts.service';
import { ICategory } from '../Interfaces/ICategory';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {

  title: string;
  body: string;
  category: string;
  categories: ICategory[];
  constructor(private postsService: PostsService) { }

  async ngOnInit(): Promise<void> {
    this.categories = await this.postsService.getAllCategories();
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
