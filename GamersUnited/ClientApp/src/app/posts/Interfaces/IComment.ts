import { IVote } from "./IVote";

export interface IComment{
    id: string;
    postId: string;
    text: string;
    createdAt: Date;
    createdBy: string;
    vote: IVote;
    votesScore: number;

}