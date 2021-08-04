import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const startTime = (new Date()).getTime();
    return next.handle(request).pipe(
      map(event => {
        if(event instanceof HttpResponse){
         const endTime = (new Date()).getTime();
         const difference = endTime - startTime;
         console.log(event.url+ ' succeed in '+ difference+ ' milliseconds');
        return event;
        }
      })
    );
  }
}
