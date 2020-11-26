import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/Post.model';
import {HttpConf} from '../conf/http.conf';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${HttpConf.URL.posts}`);
  }

}
