import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject} from 'rxjs';

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

    // const $message = new ReplaySubject(2);
    // $message.next('Hello..');
    // $message.next('How are you ?');
    // $message.next('From where are you ?');
    // $message.next('Stay at home...');

    // $message.subscribe(msg => console.log(`User1: ${msg}`));

    // $message.next('Get Vaccinated....');
    // $message.next('Keep Learning');

    // $message.subscribe(msg => console.log(`User2: ${msg}`));

    // async subject
    
    // const asyncSubjec$ = new AsyncSubject();
    // asyncSubjec$.next("Value1");
    // asyncSubjec$.next("Value2");
    // asyncSubjec$.next("Value3");
  

    // asyncSubjec$.subscribe(d => console.log(`User1 ${d}`));

    // asyncSubjec$.complete();
    // asyncSubjec$.next("Value4");
    // asyncSubjec$.next("Value5");


    // asyncSubjec$.subscribe(d => console.log(`User2 ${d}`));

    const url = "https://restcountries.eu/rest/v2/name/india?fullText=true";

     const cache = {};
    function getCountryInfo(url){
       if(!cache[url]){
         //api call using fetch
         cache[url]= new AsyncSubject();
         fetch(url).
         then(res => res.json())
         .then(d => {
               cache[url].next(d);
               cache[url].complete();
         })

       }
       return cache[url].asObservable();
    }

    getCountryInfo(url).subscribe(d => console.log(d));

    setTimeout(()=>{
      getCountryInfo(url).subscribe(d => console.log(d));

    }, 3000);

  }

}
