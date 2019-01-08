import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { Ng2ImageGalleryModule } from 'ng2-image-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AddComponent } from './add/add.component';
// import { Staff } from './staff';
// Routes

export const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'add', component: AddComponent }
]

// Config Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCDlQfBsQI7Du-a-bNyd1YK-YZqsRXipb0",
  authDomain: "test010362.firebaseapp.com",
  databaseURL: "https://test010362.firebaseio.com",
  projectId: "test010362",
  storageBucket: "test010362.appspot.com",
  messagingSenderId: "99644192450",
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    SignupComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
 FormsModule,
 ReactiveFormsModule,
 HttpClientModule,
 RouterModule.forRoot(router),
 AngularFireAuthModule,
 AngularFireModule.initializeApp(firebaseConfig),
 AngularFirestoreModule
//  Staff
//  Ng2ImageGalleryModule
  ],
  providers: [AuthService, AngularFireDatabase, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
