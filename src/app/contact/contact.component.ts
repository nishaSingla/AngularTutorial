import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-contact',
  template: `
  <div>
  <h2>{{ currentMessage }}</h2>
    <p>
    Enter Message: <input type="text" #message />
    <button (click)="sendMessage(message)">Send Message</button>
    </p>
    </div>
  `,
  styles: []
})
export class ContactComponent implements OnInit {

  currentMessage:string;

  constructor(private notificationS:NotificationService) { }

  ngOnInit() {
    this.notificationS.notificationSubject.subscribe(d => {
      this.currentMessage = d;
    })

  }

  sendMessage(data){
    this.notificationS.sendNotification(data.value);
  }

}
