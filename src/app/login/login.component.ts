import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 signupUsers: any[]=[]; 
 signupObj: any ={
  phoneNumber:'',
  userName:'',
  email:'',
  password:'',
  verifPassword:''
 }
 LoginObj: any ={
  userName:'',
  password:''
 }
constructor(private router:Router){

}
ngOnInit(): void {
  const localData = localStorage.getItem('signUpUsers');
  if (localData != null){
    this.signupUsers = JSON.parse(localData);
  }
}
onSignup(){
  this.signupUsers.push(this.signupObj);
  localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
  this.signupObj = {
    phoneNumber:'',
    userName:'',
    email:'',
    password:'',
    verifPassword:''
  };
}
onLogin(){
  const isUserExist = this.signupUsers.find(m => m.userName == this.LoginObj.userName && m.password == this.LoginObj.password );
  if (isUserExist != undefined) {
    alert('User Logged In Successfully');
  } else {
    alert('Wrong Credentials Or User Doesn\'t exist');
  }
}

}
