import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Add this line
  { path: 'home', component: HomeComponent },
  
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login by default
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
