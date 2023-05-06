import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router, private authService: AuthService) {

  }
  onLogin() {

    // perform authentication logic here
    if (this.username === 'taha' && this.password === 'taha') {
      this.router.navigate(['/admin']);
    }
    else if (this.username === 'maram' && this.password === 'maram') {
      this.router.navigate(['/admin']);
    }
    else {
      this.authService.login(this.username, this.password).subscribe((response: any) => {
        if (response.success) {
          console.log('User exists');
        } else {
          this.error = 'Invalid credentials';
        }
      });

    }



  }

}
