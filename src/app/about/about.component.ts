import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div>
   <h1>About Works</h1>
   </div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  
  currentMessage:string;

  constructor() { }

  ngOnInit() {
  }

}
