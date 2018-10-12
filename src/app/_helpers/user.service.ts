import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {User} from "../_models";
import {MessageService} from '../_helpers/message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class UserService {

  private userURL = 'api/users';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]> ( this.userURL )
      .pipe (
        tap ( users => this.log ( 'fetched users' ) ),
        catchError ( this.handleError ( 'getUsers', [] ) )
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getUserNo404<Data>(id: number): Observable<User> {
    const url = `${this.userURL}/?id=${id}`;
    return this.http.get<User[]> ( url )
      .pipe (
        map ( users => users[0] ), // returns a {0|1} element array
        tap ( h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log ( `${outcome} user id=${id}` );
        } ),
        catchError ( this.handleError<User> ( `getHero id=${id}` ) )
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    const url = `${this.userURL}/${id}`;
    return this.http.get<User> ( url ).pipe (
      tap ( _ => this.log ( `fetched user id=${id}` ) ),
      catchError ( this.handleError<User> ( `getUser id=${id}` ) )
    );
  }

  /* GET heroes whose name contains search term */
  searchUser(term: string): Observable<User[]> {
    if (!term.trim ()) {
      // if not search term, return empty hero array.
      return of ( [] );
    }
    return this.http.get<User[]> ( `${this.userURL}/?name=${term}` ).pipe (
      tap ( _ => this.log ( `found users matching "${term}"` ) ),
      catchError ( this.handleError<User[]> ( 'searchUser', [] ) )
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addUser  (user: User): Observable<User> {
    return this.http.post<User>(this.userURL, user, httpOptions).pipe(
      tap((user: User) => this.log(`added user w/ id=${user.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `;${this.userURL}/${id}`;

    return this.http.delete<User> ( url, httpOptions ).pipe (
      tap ( _ => this.log ( `;deleted user id=${id}` ) ),
      catchError ( this.handleError<User> ( 'deleteUser' ) )
    );
  }

  /** PUT: update the hero on the server */
  updateUser(user: User): Observable<any> {
    return this.http.put ( this.userURL, user, httpOptions ).pipe (
      tap ( _ => this.log ( `;updated user id=${user.id}` ) ),
      catchError ( this.handleError<any> ( 'updateUser' ) )
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error ( error ); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log ( `;${operation} failed: ${error.message}` );

      // Let the app keep running by returning an empty result.
      return of ( result as T );
    };
  }

  /** Log a UserService message with the MessageService */
  private log(message: string) {
    this.messageService.add ( `UserService: ${message}` );
  };
}
/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

