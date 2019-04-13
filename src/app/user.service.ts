import { Injectable } from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';  // URL to web api
  users: User[] = [];
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user);
  }
  getuser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }
  getId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(shop => shop.id)) + 1 : 1;
  }
  searchFirstName(term: string): Observable<User[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<User[]>(`${this.usersUrl}/?firstName=${term}` && `${this.usersUrl}/?lastName=${term}`);
  }
}
