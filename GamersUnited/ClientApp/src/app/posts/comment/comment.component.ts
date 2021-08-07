import { Component, Input, OnInit } from '@angular/core';
import { IComment } from '../Interfaces/IComment';
import { IVote } from '../Interfaces/IVote';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }

  @Input()
  comment: IComment;
  
  ngOnInit(): void {
    this.comment.createdAt = new Date(this.comment.createdAt)
  }

}
