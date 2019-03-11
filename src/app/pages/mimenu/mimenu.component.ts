import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-mimenu',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class MimenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
