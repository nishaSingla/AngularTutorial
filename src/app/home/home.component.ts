import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <app-life-cycle-child-component>
       <p>This is child component 1</p>
      </app-life-cycle-child-component>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
