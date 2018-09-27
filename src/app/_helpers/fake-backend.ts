// import {Injectable} from '@angular/core';
// import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { Observable, of, throwError } from 'rxjs';
// import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
// import { WithdrawService} from '../config/config.service';
// import { FormGroup, FormControlName} from '@angular/forms';
// import {getToken} from 'codelyzer/angular/styles/cssLexer';
// import {DISABLED} from '@angular/forms/src/model';
//
// @Injectable()
// export class FakeBackendInterceptor implements HttpInterceptor {
//
//   constructor() { }
//
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // array in local storage for registered users
//     const withdraws: any[] = JSON.parse(localStorage.getItem('withdraws')) || [];
//
//     // wrap in delayed observable to simulate server api call
//     return of(null).pipe(mergeMap(() => {
//
//       if (!FormControlName { = DISABLED; }) {
//
//        const withdraw = withdraws[0];
//         let withdraw = {
//
//           firstName: withdraw.firstName;
//           lastname: withdraw.lastName;
//           email: withdraw.email;
//           id: withdraw.idNumber;
//           token: 'fake-jwt-token';
// //       };
// //       };
// //         return of ( new HttpResponse ( {status: 200, body: body, statusText: getToken ( body.token )} ) );
// //       } else {
// //         // else return 400 bad request
// //         return throwError ( {error: {message: 'Fill in all fields'}} );
// //       }
// //     }
//
//   export let fakeBackendProvider = {
//   // use fake backend in place of Http service for backend-less development
//   provide: HTTP_INTERCEPTORS,
//   useClass: FakeBackendInterceptor,
//   multi: true
// };
