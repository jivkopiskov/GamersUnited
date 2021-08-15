import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/core/posts.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  public name: string;
  public description: string;
  public nameExists = false;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.postsService.addCategory(this.name, this.description).subscribe(
        (category) => this.router.navigate(['posts', category.id]),
        (err) => this.nameExists = true,
      )
    }
  }
}