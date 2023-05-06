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
  
    phone_num: string ='';
    username:string='';
    email_adress:string='';
    password:string='';
    confirmPassword:string='';

    


ngOnInit(): void {
  
}
onSignup(){
  if ( this.validation === true) {
    if ( this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    this.dbService.signup(this.phone_num,this.username, this.email_adress, this.password).subscribe((response) => {
      console.log(response);
    
    });
  }
  
  
}

}

