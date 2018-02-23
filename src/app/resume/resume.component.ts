import {Component} from '@angular/core';
import {DataServiceService} from '../data-service.service';
import {Config} from '../config.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  constructor(private data: DataServiceService) {
    this.data.dataSub.subscribe((obj: Array<Config>) => console.log(obj, ' Resume'));
  }

}
