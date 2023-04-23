import { Component, OnInit } from '@angular/core';
import {  DatabaseService  } from './services/connections.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'PetMatch';

  constructor(private dbService: DatabaseService) { }
  ngOnInit() {
    this.dbService.connect().subscribe((response) => {
      console.log(response);
    });
  
  }

}
