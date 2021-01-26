import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

basePath : string ='http://localhost:3000/user/';

  constructor(private http:HttpClient) { }

   getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.basePath}`);
   }
}
