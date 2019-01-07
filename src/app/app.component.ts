import { Component, NgZone } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { flyIn } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations:[flyIn]
})
export class AppComponent {
  title='app'
      // router跳转动画所需参数
  constructor(
    private ngZone:NgZone
  ){
    // setInterval(() => console.log(new Date().getTime()), 100);
    ngZone.runOutsideAngular(() => {
      // setInterval(() => console.log(new Date().getTime()), 100);  
  });
  }
}
