import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/posts.service';
import { IVote, VoteType } from '../Interfaces/IVote';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  @Input()
  public vote: IVote;
  @Input()
  public votesCount: number
  @Input()
  public postId: string;
  @Input()
  public commentId: string;

  upvoteDisabled: boolean;
  downvoteDisabled: boolean;

  ngOnInit(): void {
    this.upvoteDisabled = this.vote?.voteType == VoteType.upvote;
    this.downvoteDisabled = this.vote?.voteType == VoteType.downvote;
    //hack: upon first vote, it was showing 01 instead of 1, as it thought it was string.
    this.votesCount = +this.votesCount;
  }

  async upvote() {
    await this.postsService.vote(this.postId, this.commentId, VoteType.upvote).toPromise();
    this.upvoteDisabled = !this.upvoteDisabled;
    if (this.upvoteDisabled) {
      this.votesCount += 1;
    } else {
      this.votesCount -= 1;
    }
    if (this.downvoteDisabled) {
      this.downvoteDisabled = !this.downvoteDisabled
      this.votesCount += 1;
    }
  }

  async downvote() {
    await this.postsService.vote(this.postId, this.commentId, VoteType.downvote).toPromise();
    this.downvoteDisabled = !this.downvoteDisabled;
    if (this.downvoteDisabled) {
      this.votesCount -= 1;
    } else {
      this.votesCount += 1;
    }
    if (this.upvoteDisabled) {
      this.upvoteDisabled = !this.upvoteDisabled
      this.votesCount -= 1;
    }

  }
}
