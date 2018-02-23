import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Config} from './config.model';


@Injectable()
export class DataServiceService {
  dataSub = new Subject();
  baseData: Array<Config>;

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get('assets/config.json')
      .subscribe(data => {
        console.log(data, ' Service');
        this.dataSub.next(data['posts']);
        this.baseData = data['posts'];
        console.log(this.dataSub, ' Subject');
      });
  }
}
