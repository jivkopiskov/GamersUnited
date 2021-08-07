import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../posts/Interfaces/ICategory';
import { ICreatePost } from '../posts/Interfaces/ICreatePost';
import { IPostSummary } from '../posts/Interfaces/IPostSummary';
import { VoteType } from '../posts/Interfaces/IVote';
import { Observable } from 'rxjs';
import { IComment } from '../posts/Interfaces/IComment';

const endpointUrl = '/api/posts';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${endpointUrl}/categories`);
  }

  createPost(post: ICreatePost): Observable<ICreatePost> {
    return this.http.post<ICreatePost>(`${endpointUrl}`, post);
  }

  getPostsByCategory(id: number): Observable<IPostSummary[]> {
    return this.http.get<IPostSummary[]>(`${endpointUrl}/category/${id}`);
  }

  getPost(id: string): Observable<IPostSummary> {
    return this.http.get<IPostSummary>(`${endpointUrl}/${id}`);
  }

  getComments(id: string): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${endpointUrl}/comments/${id}`);
  }

  addComment(id: string, comment: string) {
    const payload = { comment };
    return this.http.post<IComment>(`${endpointUrl}/comments/${id}`, payload);
  }

  vote(postId: string, commentId: string, voteType: VoteType) {
    var vote = { postId, commentId, vote: voteType }
    return this.http.post(`${endpointUrl}/votes`, vote);
  }
}
