import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service.service';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit{
  signupUsers : any[]= [];
  constructor(private dbService : DbService){}
  validation : boolean=true ;
  signupObj : any ={
    phoneNumber: 0,
    userName:'',
    email:'',
    password:'',
    confirmPassword:''

  };


ngOnInit(): void {
  
}
onSignup(){
  if ( this.validation === true) {
    if ( this.signupObj.password !== this.signupObj.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    this.dbService.signup(this.signupObj.phoneNumber,this.signupObj.username, this.signupObj.email, this.signupObj.password).subscribe((response) => {
      console.log(response);
    });
  }
  
  
}

}

