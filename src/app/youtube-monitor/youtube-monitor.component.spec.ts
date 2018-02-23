import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeMonitorComponent } from './youtube-monitor.component';

describe('YoutubeMonitorComponent', () => {
  let component: YoutubeMonitorComponent;
  let fixture: ComponentFixture<YoutubeMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
