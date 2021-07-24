import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
})
export class ViewchildComponent implements OnInit, AfterViewInit {

  // @ViewChild("highlight")marker:ElementRef;
  @ViewChildren("highlight")marker:QueryList<any>;

  @ViewChild('childView', {read: true, static: true})child:CounterComponent;

  constructor() { 

  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // console.log(this.child);
    // console.log(this.marker.length);
    this.marker.first.nativeElement.style.color="red";
    this.marker.last.nativeElement.style.color="green";
  }

  inc(){
     this.child.increment();
  }

  dec(){
    this.child.decrement();
  }



}
