import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) {}

  connect() {
    return this.http.get('http://localhost/myproject/db.php');
  }
}
