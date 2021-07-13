import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      Counter Child Component
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  public counter:number = 0;

  constructor() { }

  ngOnInit() {
  }

  increment(){
     this.counter++; 
  }

  decrement(){
    this.counter--;
  }

}
