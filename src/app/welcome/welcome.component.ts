import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor(private router: Router){}
  ngOnInit(): void {}
  onLogin(){
    this.router.navigate(['/login']);
  }
  onSignup(){
    this.router.navigate(['/inscrire']);
  }
  onAbandonner(){
    this.router.navigate(['/abandonner']);
  }
  onAdopter(){
    this.router.navigate(['/adopter']);

  }
  onHome(){
    this.router.navigate(['/welcome']);

  }
  onCat(){
    this.router.navigate(['/cats']);

  }
  onDog(){
    this.router.navigate(['/dogs']);

  }

}
