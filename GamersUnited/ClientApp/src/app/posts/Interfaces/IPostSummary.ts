import { ICreatePost } from "./ICreatePost";
import { IVote } from "./IVote";

export interface IPostSummary extends ICreatePost {
    createdBy: string;
    commentsCount: number;
    votesScore: number;
    vote: IVote;
    categoryName: string;
}