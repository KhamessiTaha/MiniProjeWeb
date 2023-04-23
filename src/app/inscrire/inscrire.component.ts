import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit{
  signupUsers : any[]= [];
  constructor(private router: Router){}
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
    this.router.navigate(['/login']);

  }
  
  
}

}
