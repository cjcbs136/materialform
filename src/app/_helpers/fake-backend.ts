import {Injectable} from '@angular/core';
import {HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Observable, of, pipe, throwError} from 'rxjs';
import {delay, mergeMap, materialize, dematerialize} from 'rxjs/operators';

@Injectable ()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // array in local storage for registered users
    const users: any[] = JSON.parse ( localStorage.getItem ( 'users' ) ) || [];

    // wrap in delayed observable to simulate server api call
    return of ( null ).pipe ( mergeMap ( () => {

        // on submit
        if (request.url.endsWith ( 'user-success/user-success' ) && request.method === 'POST') {
          // if login details are valid return 200 OK with user details and fake jwt token
          const user = new users[0];
          const body = {
            id: user.id,
            idNumber: user.idNumber,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            amountToWithdraw: user.amountToWithdraw,
            isAccepted: user.isAccepted,
            token: 'fake-jwt-token'
          };
          return of ( new HttpResponse ( {status: 200, body: body} ) );
        } else {
          // else return 400 bad request
          return throwError ( {error: {message: 'please check all fields'}} );
        }

        // get users
        if (request.url.endsWith ( '/users' ) && HttpRequest.prototype.method === 'GET') {
          // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
          return of ( new HttpResponse ( {status: 200, body: users} ) );
        } else {
          // return 401 not authorised if token is null or invalid
          return throwError ( {status: 401, error: {message: 'Unauthorised'}} );
        }


        if (request.url.endsWith ( '/user-request/userRequest' ) && request.method === 'POST') {
          // get new user object from post body
          const newUser = request.body;

          // validation
          const duplicateUser = users.filter ( user => user.idNumber === newUser.idNumber ).length;
          if (duplicateUser) {
            return throwError ( {error: {message: 'Username "' + newUser.idNumber + '" is already taken'}} );
          }

          // save new user
          newUser.id = users.length + 1;
          users.push ( newUser );
          localStorage.setItem ( 'users', JSON.stringify ( users ) );

          // respond 200 OK
          return of ( new HttpResponse ( {status: 200} ) );
        }


        // pass through any requests not handled above
        return next.handle ( request );
      } ) )

      // call materialize and dematerialize to ensure delay even
      .pipe ( materialize () )
      .pipe ( delay ( 500 ) )
      .pipe ( dematerialize () );
  }
}
export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi:  true
};
