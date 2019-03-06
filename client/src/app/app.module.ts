import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PaymentWindowComponent } from './paymentWindow/paymentWindow.component';
import { TechWindowComponent } from './techWindow/techWindow.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AddProjectComponent} from './add_project/add_project.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { ProjectMgmtService } from './project.service';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add_project', component:AddProjectComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'paymentWindow', component: PaymentWindowComponent},
  { path: 'techWindow', component: TechWindowComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    AddProjectComponent,
    HomeComponent,
    PaymentWindowComponent,
    TechWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    AuthenticationService,
    ProjectMgmtService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
