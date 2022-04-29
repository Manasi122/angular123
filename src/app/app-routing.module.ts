import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UsersComponent } from './users/users.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path : 'studentservice' , component: StudentListComponent},
  {path:'home',component:HomeComponent},
  // {path:'contact',component:ContactComponent},

  {path:'contact',component:ContactComponent,
  children:[{path:'info',component:InfoComponent}]},

  {path:'contact/info/:contact_no',component:ContactComponent},
  {path:'contact/info/:name/:contact_no',component:ContactComponent},

  // {path:'login',component:LoginComponent},
  // {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},

  {path:'user',component:UsersComponent, children:[
    {path:'register',component:RegisterComponent},
  ]},

  {path:'user',component:UsersComponent, children:[
    {path:'login',component:LoginComponent},
  ]},
  
  {path:'**',component:PagenotfoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
