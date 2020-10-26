import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public form: FormGroup;

  constructor(public fb: FormBuilder, public toastr: ToastrService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      emailID: ['', Validators.compose([Validators.required, Validators.pattern('^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')])],
      mobileNo: ['', Validators.compose([Validators.required])],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  numberValidate(event) {
    if (event.charCode !== 0) {
      const pattern = /[0-9]/;
      const inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
  }

  nameValidate(event) {
    if (event.code == 'Space') {
      if (event.target.value.length == 0) {
        event.preventDefault();
      }
    } else {
      if (event.charCode !== 0) {
        const pattern = /[a-zA-Z ]/;
        const inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
          event.preventDefault();
        }
      }
    }
  }

  contactDetails(){

  }

}
