import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import {NotificationService} from './notification.service';
import { NotificationBoardComponent } from './notification-board/notification-board.component';
import { LifeCycleComponent } from './home/LifeCycleHooks';
import { ChildComponent } from './home/child.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { CounterComponent } from './viewchild/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RxjsComponent,
    NotificationBoardComponent,
    LifeCycleComponent,
    ChildComponent,
    ViewchildComponent,
    CounterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
