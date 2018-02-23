import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeInputBoxComponent } from './youtube-input-box.component';

describe('YoutubeInputBoxComponent', () => {
  let component: YoutubeInputBoxComponent;
  let fixture: ComponentFixture<YoutubeInputBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeInputBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
