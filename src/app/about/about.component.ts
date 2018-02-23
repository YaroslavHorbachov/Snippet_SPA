import {Component, ElementRef, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import {BlackListNodeService} from '../black-list-node.service';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/zip';
import {YoutubeService} from '../youtube.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  form: FormGroup;
  name: AbstractControl;
  surname: AbstractControl;
  age: AbstractControl;
  sku: AbstractControl;

  constructor(fb: FormBuilder,
              private logger: BlackListNodeService,
              private element: ElementRef,
              private youtube: YoutubeService) {
    this.form = fb.group({
      'name': ['', Validators.required],
      'surname': ['', Validators.required],
      'age': ['', Validators.required],
      'sku': ['', Validators.required]
    });
    this.name = this.form.controls['name'];
    this.surname = this.form.controls['surname'];
    this.age = this.form.controls['age'];
    this.sku = this.form.controls['sku'];
    [this.surname, this.name, this.age, this.sku]
      .forEach(control =>
        control.valueChanges
          .zip()
          .debounceTime(1500)
          .subscribe(event => this.logger.loggerBlock(event)));
  }

  ngOnInit() {
    console.log(this.element.nativeElement);
  }

  onSubmit(form: any): void {
    console.log('Prime object', form);
    this.youtube.search('man', 10);
  }

}
