import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


export const API_KEY_SPOTIFY = '7cb0ab0b359b4bd1bc400754262bb06d';
export const API_URL_SPOTIFY = 'https://api.spotify.com/v1';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL = `${API_URL_SPOTIFY}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    const apiKey = API_KEY_SPOTIFY;
    const headers = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${apiKey}`
      })
    };

    return this.http.get(queryURL, headers).map((res: any) => res.json());
  }

  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }

}
