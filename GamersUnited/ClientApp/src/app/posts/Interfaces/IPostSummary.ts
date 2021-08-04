import { ICreatePost } from "./ICreatePost";

export interface IPostSummary extends ICreatePost {
    createdBy: string;
    commentsCount: number;
}