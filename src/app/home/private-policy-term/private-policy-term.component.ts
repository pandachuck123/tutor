import {Component, Inject, OnInit} from '@angular/core';
import {WINDOW} from '@ng-toolkit/universal';

@Component({
  selector: 'app-private-policy-term',
  templateUrl: './private-policy-term.component.html',
  styleUrls: ['./private-policy-term.component.scss']
})
export class PrivatePolicyTermComponent implements OnInit {

  constructor(@Inject(WINDOW) private window: Window) {
  }

  ngOnInit(): void {
  }
  noticelink(){
    // this.window.open(this.currenturl + '/' +  this.path,'_blank');
    this.window.open('https://www.jobstreet.com.my/en/about-us/privacy-policy/');
  }
}
