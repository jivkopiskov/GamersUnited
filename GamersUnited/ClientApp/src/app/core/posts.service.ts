import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../posts/Interfaces/ICategory';
import { ICreatePost } from '../posts/Interfaces/ICreatePost';
import { IPostSummary } from '../posts/Interfaces/IPostSummary';
import { VoteType } from '../posts/Interfaces/IVote';
import { Observable } from 'rxjs';

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

  votePost(postId: string, voteType: VoteType) {
    var vote = { postId, vote: voteType }
    return this.http.post(`${endpointUrl}/votes`, vote);
  }
}
