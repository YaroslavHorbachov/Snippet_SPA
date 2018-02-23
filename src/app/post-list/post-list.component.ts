import {Component, OnInit} from '@angular/core';
import {Config} from '../config.model';
import {DataServiceService} from '../data-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  dataJson: Config[];
  id: string;

  constructor(private data: DataServiceService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(param => this.id = param['id']);
    this.dataJson = this.data.baseData;
  }


  ngOnInit() {
  }

}
