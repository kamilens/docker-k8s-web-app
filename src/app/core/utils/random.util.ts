import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/Post.model';
import {HttpConf} from '../conf/http.conf';

@Injectable({
  providedIn: 'root'
})
export class RandomUtil {

  private static letters = '0123456789ABCDEF';

  constructor() { }

  public static getRandomColor(): string {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += RandomUtil.letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

}
