import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req).pipe(
        catchError(
          (error: HttpErrorResponse) => {
            if (error.error instanceof ErrorEvent) {
              console.log('This is client side error');
            }
            else{
              console.log('This error');
              console.log(error);
            }
            return throwError(() => error);
          }
        )
      );
  }

}
