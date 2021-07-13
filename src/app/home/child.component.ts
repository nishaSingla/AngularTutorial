
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-child-component',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit{

	
  constructor() { 
	//   console.log('Constructor called');
  }

  ngOnInit() {
	// console.log('ngOnInit Called called');

  }

 

  

}
