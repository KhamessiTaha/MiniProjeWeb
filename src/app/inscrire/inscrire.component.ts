import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit{
  signupUsers : any[]= [];
  constructor(){}
  signupObj : any ={
    phoneNumber:'',
    userName:'',
    email:'',
    password:''

  };


ngOnInit(): void {
  
}
onSignup(){
  this.signupUsers.push(this.signupObj)
  localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers))
}
}
