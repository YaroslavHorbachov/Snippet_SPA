import {AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {DataServiceService} from './data-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  constructor(private data: DataServiceService,
              private router: Router) {
  }
  addShowClass(elem: HTMLElement) {
    const list = elem.classList;
    list.toggle('show');
  }

  ngAfterContentInit() {
    setTimeout(this.data.getData(), 1000);
  }

}
