import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

export const API_KEY = 'AIzaSyAT5YF9Q8nhbJ1o4rOIlJMncXoREilMhJM';
export const API_URL = 'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YoutubeService {

  constructor(private http: HttpClient,
              @Inject('API_KEY') private key: string,
              @Inject('API_URL') private url: string) {
  }

  search(query: string, amount: number) {
    const queryParams = [
      `part=snippet`,
      `key=${this.key}`,
      `maxResults=${amount}`,
      `q=${query}|fishing`,
      `type=video`,
      `regionCode=US`,
      `videoDuration=short`
    ].join('&');
    const queryUrl = `${this.url}?${queryParams}`;
    this.http.get(queryUrl)
      .map(response => response)
      .subscribe(result => console.log(result));
  }
}
