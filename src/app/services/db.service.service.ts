import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  constructor(private http: HttpClient) { }

  signup(phone_num: string, username: string, email_adress: string, password: string) {
    const data = { phone_num, username, email_adress, password };
    return this.http.post('http://localhost:5000/createUser', data);
  }
}