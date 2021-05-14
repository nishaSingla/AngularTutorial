import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject} from 'rxjs';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Subject 
    //  const subject = new Subject();

    //  subject.subscribe( d => console.log(`Subject Subscriber1 : ${d}`));

    //  subject.next(2020);

    //  subject.subscribe( d => console.log(`Subject Subscriber2 : ${d}`)); // returned nothing


   // Behavior Subject
    //  const bSubject = new BehaviorSubject<number>(12);
    //  bSubject.subscribe(d => console.log(`BehaviorSubject Subscriber1:  ${d}`));

    // bSubject.next(200);

    // bSubject.subscribe(d => console.log(`BehaviorSubject Subscriber2:  ${d}`));

    

    //ReplaySubject
     const replaySubject = new ReplaySubject(2);
    const d =  replaySubject.subscribe(d => console.log(`Subsriber 1: ${d}`));
     replaySubject.next(2001);
     replaySubject.next(2002);
// d.unsubscribe();
     replaySubject.next(2003);
     replaySubject.next(2004);
     replaySubject.subscribe(d => console.log(`Subsriber 2: ${d}`));
     replaySubject.next(2005);
    



  
  }

}
