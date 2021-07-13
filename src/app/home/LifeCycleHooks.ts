
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './lifeCycle.component.html'
})
export class LifeCycleComponent implements OnInit, OnChanges{

	
  constructor() { 
	  console.log('Constructor called');
  }

  ngOnInit() {
	console.log('ngOnInit Called called');

  }

  ngOnChanges(){
	  console.log('NgOnChanges');
	  
  }

  

}
