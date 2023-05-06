import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Connect {

  constructor(private http: HttpClient) {}

  connect() {
    return this.http.get('http://localhost/myproject/bd connect.php');
  }
}
