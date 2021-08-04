import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../posts/Interfaces/ICategory';
import { ICreatePost } from '../posts/Interfaces/ICreatePost';
import { IPostSummary } from '../posts/Interfaces/IPostSummary';

const endpointUrl = '/api/posts';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  async getAllCategories(): Promise<ICategory[]> {
    return await this.http.get<ICategory[]>(`${endpointUrl}/categories`).toPromise()
  }

  async createPost(post: ICreatePost): Promise<ICreatePost> {
    return await this.http.post<ICreatePost>(`${endpointUrl}`, post).toPromise();
  }

  async getPostsByCategory(id: number): Promise<IPostSummary[]> {
    return await this.http.get<IPostSummary[]>(`${endpointUrl}/category/${id}`).toPromise();
  }
}
