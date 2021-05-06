import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
    // Observables are unicast 
    const observable = new Observable(obj => obj.next(Math.random()));

    // subscriber 1
    observable.subscribe(d => console.log(d));

    // subscriber 2
  
    observable.subscribe(d => console.log(d));

    // Subject 
     const subject2 = new Subject();

     //subscriber 1

     subject2.subscribe( d => console.log(d));

     //subscriber 2
     subject2.subscribe( d => console.log(d));

     subject2.next(Math.random());


    const subject3 = new Subject();
    const data = ajax('https://jsonplaceholder.typicode.com/users');

    subject3.subscribe(d => console.log(d));
    subject3.subscribe(d => console.log(d));

    const result = data.subscribe(subject3);
    
  

    

  



  
  }

}
