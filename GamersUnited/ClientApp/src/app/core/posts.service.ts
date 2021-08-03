import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../posts/Interfaces/ICategory';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  async getAllCategories(): Promise<ICategory[]>{
    return await this.http.get<ICategory[]>('/api/posts/categories').toPromise()
  }
}
