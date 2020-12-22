import { Injectable } from '@angular/core'
import { Observable,BehaviorSubject, throwError,of } from 'rxjs';
import {  map,catchError,retry} from 'rxjs/operators';
import { User } from '../models/users.model';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { UtilsService } from './utils.service';


@Injectable()
export class HttpServiceService {

  constructor(private http: HttpClient,private UtilsService: UtilsService) { }


  private _user$ = new BehaviorSubject<User[]>([]);
  public user$ = this._user$.asObservable()

  public getUsers() {
    this.http.get<User[]>(`${environment.baseURL}user/`)
      .pipe(
        map(user => user)
      ).subscribe(user => {
        this._user$.next(user);
      })
  
}

public async signup(userCred)  {
  return this.http.post(`${environment.baseURL}auth/signup`, userCred).pipe(
    map(user=>{
      sessionStorage.setItem('user', JSON.stringify(user));
      return user
    })
  );
}

public async login(loginCred)  {
  return this.http.post(`${environment.baseURL}auth/login`, loginCred).pipe(
    map(user=> {
      sessionStorage.setItem('user', JSON.stringify(user));
      return user}
      ),
    catchError(() => throwError(null)));
}

public getCurrUser(): Observable<User> {
  const loggedInUser = JSON.parse(sessionStorage.user);
  return this.http.get<User>(`${environment.baseURL}user/${loggedInUser.personal_id}`)
  .pipe(
    retry(1),
    catchError(() => throwError('no user found!'))
  );
}

public async updateUser(user:User) {
  return this.http.put(`${environment.baseURL}user/${user.personal_id}`, user ).pipe(
    map(user=> {
      sessionStorage.setItem('user', JSON.stringify(user));
      return user}
      ),
    catchError(() => throwError(null)));
}



}