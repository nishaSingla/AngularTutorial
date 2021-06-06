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

    const $message = new ReplaySubject(2);
    $message.next('Hello..');
    $message.next('How are you ?');
    $message.next('From where are you ?');
    $message.next('Stay at home...');

    $message.subscribe(msg => console.log(`User1: ${msg}`));

    $message.next('Get Vaccinated....');
    $message.next('Keep Learning');

    $message.subscribe(msg => console.log(`User2: ${msg}`));



    



  
  }

}
