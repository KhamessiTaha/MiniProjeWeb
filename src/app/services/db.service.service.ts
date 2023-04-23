import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  constructor(private http: HttpClient) { }

  signup(phoneNumber:string, userName: string, email: string, password: string) {
    const data = { phoneNumber,userName, email, password };
    return this.http.post('http://localhost/myproject/signup.php', data);
  }
}