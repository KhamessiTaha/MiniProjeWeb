import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { AbandonnerComponent } from './abandonner/abandonner.component';
import { AdopterComponent } from './adopter/adopter.component';
import { AddminComponent } from './addmin/addmin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    CatsComponent,
    DogsComponent,
    InscrireComponent,
    AbandonnerComponent,
    AdopterComponent,
    AddminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
