import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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

