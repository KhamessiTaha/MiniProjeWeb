import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { AdopterComponent } from './adopter/adopter.component';
import { AbandonnerComponent } from './abandonner/abandonner.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddminComponent } from './addmin/addmin.component';

const routes: Routes = [
 
  {path: 'login', component: LoginComponent},
  {path: 'inscrire',component: InscrireComponent},
  {path: 'cats',component: CatsComponent},
  {path: 'dogs',component: DogsComponent},
  {path: 'adopter',component: AdopterComponent},
  {path: 'abandonner',component: AbandonnerComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'admin', component: AddminComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
