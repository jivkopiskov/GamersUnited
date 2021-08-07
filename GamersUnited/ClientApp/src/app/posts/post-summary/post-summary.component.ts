import { Component, OnInit, Input } from '@angular/core';
import { IPostSummary } from '../Interfaces/IPostSummary';

@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.css']
})
export class PostSummaryComponent implements OnInit {

  constructor() { }

  @Input()
  public post: IPostSummary;

  @Input()
  public expanded = false;

  @Input()
  public showCommentsCount = true;

  ngOnInit(): void {
  }

}
