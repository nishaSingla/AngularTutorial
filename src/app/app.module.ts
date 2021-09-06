import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import {NotificationService} from './notification.service';
import { NotificationBoardComponent } from './notification-board/notification-board.component';
import { ChildComponent } from './home/child.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { CounterComponent } from './viewchild/counter/counter.component';
import { UsersComponent } from './users/users.component';
import { HeadersInterceptor } from './headers.interceptor';
import { LoggingInterceptor } from './logging.interceptor';
import { TdfComponent } from './tdf/tdf.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RxjsComponent,
    NotificationBoardComponent,
    ChildComponent,
    ViewchildComponent,
    CounterComponent,
    UsersComponent,
    TdfComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    NotificationService,
    {provide: HTTP_INTERCEPTORS, useClass:HeadersInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass:LoggingInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
