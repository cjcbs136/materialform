import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../angularWithdrawal/src/environments/environment';
import {User} from '../_models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private headers: HttpHeaders,
    private userService: UserService) {
  }

  createUser(value: any) {
    const headers = new Headers ();
    headers.append ( 'Content-Type', 'application/json' );

    return this.http.get ( `${environment.apiUrl}/users/withdrawal`, {
      headers = HttpHeaders
      .toPromise ()
      .then ( (res: Response) => {
        const data = res.json ();
        const allUsers = [];
      }
        for (const entry of data.user_entries) {
          const user = new User ();
          user.firstName = entry.user.firstName;
          user.lastName = entry.user.lastName;
          user.id = entry.entry_number;
          user.idNumber = entry.user.idNumber;
          user.email = entry.user.email;
          user.amountToWithdraw = entry.user.amountToWithdraw;
          allUsers.push ( user );
        }

        return allUsers;
      } )
      .catch ( this.handleError );
  }
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

  withdrawal(user: User) {
    return this.http.post(`${environment.apiUrl}/users/withdrawal`, user);
  }
}



