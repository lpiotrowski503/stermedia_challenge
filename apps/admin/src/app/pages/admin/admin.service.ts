import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGetUsersResponse, IGetPostsResponse } from './admin.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  public getEndPoint(endPoint: string): string {
    return `${environment.api}${environment[endPoint]}`;
  }

  public getUsers(): Observable<IGetUsersResponse> {
    return this.http.get<IGetUsersResponse>(this.getEndPoint('users'));
  }

  public getPosts(id: string): Observable<IGetPostsResponse[]> {
    return this.http.get<IGetPostsResponse[]>(
      `${this.getEndPoint('posts').replace('{id}', id)}`
    );
  }
}
