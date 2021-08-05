export interface IVote {
    postId: string;
    voteType: VoteType,
    commentId: string
}


export enum VoteType {
    "downvote" = 0,
    "upvote" = 1,
    "neutral" = 2
}