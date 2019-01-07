import { Component, OnInit } from '@angular/core';
// import { ServiceProjectComponent } from './service-project/service-project.component';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.less']
})
export class BasicInformationComponent implements OnInit {

  constructor(
    // private test:ServiceProjectComponent
  ) { }

  ngOnInit() {
    // console.log(this.test)
  }

}
