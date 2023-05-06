import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AbandonnerService {

  constructor(private http: HttpClient) { }

  add(name:string,sex:string,color:string,breed:string,age:string,weight:string,description:string,gender:string,register_adopter:string){
    const data = { name,sex,color,breed,age,weight,description,gender,register_adopter };
    return this.http.post('http://localhost/myproject/pending.php', data);
  }

}
