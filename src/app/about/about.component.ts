import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div>
  <h2>About</h2>
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
