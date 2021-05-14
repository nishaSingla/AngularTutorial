import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public notificationSubject = new Subject<string>();
  // public notificationSubject = new BehaviorSubject<string>('Greeting from Nisha');

  constructor() { }

  sendNotification(data){
    this.notificationSubject.next(data);

  }
}
