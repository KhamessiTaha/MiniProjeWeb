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
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

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
    AddminComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
  {path: '**', redirectTo: 'welcome',pathMatch:'full'},
  {path: '', redirectTo: 'welcome',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'inscrire',component: InscrireComponent},
  {path: 'cats',component: CatsComponent},
  {path: 'dogs',component: DogsComponent},
  {path: 'adopter',component: AdopterComponent},
  {path: 'abandonner',component: AbandonnerComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'admin', component: AddminComponent}
 
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
