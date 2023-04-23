import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  userName: string ='';
  password: string = '';
 
constructor(private router:Router){

}
ngOnInit(): void {

}
onSignup() {
  // perform authentication logic here
  if (this.userName === 'taha' && this.password === 'taha') {
    this.router.navigate(['/admin']);
  }
  if (this.userName === 'maram' && this.password === 'maram') {
    this.router.navigate(['/admin']);
  }
}

}
