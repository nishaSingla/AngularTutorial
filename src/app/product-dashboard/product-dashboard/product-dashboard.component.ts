import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit, OnDestroy {

  private mySubscription:Subscription;
  constructor() {
   }

 ngOnInit(){
    // promise 
     const promise = new Promise(resolve => {
      //  console.log('Promise call.....');
       setTimeout(()=>{
           resolve('Promise working');
           resolve('Promise working1');
           resolve('Promise working2');
           resolve('Promise working3');
       }, 1000)
     })

    //  promise.then(result => console.log(result));

    // observable

    const observable = new Observable(sub => {
      console.log('Observable call ....');
      let counter = 0;
        setInterval(() => {
          counter = counter +1;
          sub.next(counter);
            
        }, 1000);
    });
    // observable.pipe(
    //   filter(d => d === 'Observable working1'),
    // )
    this.mySubscription = observable.subscribe(result => console.log('Subscriber count ' + result));
 }

 ngOnDestroy(){
    this.mySubscription.unsubscribe();
 }

}
