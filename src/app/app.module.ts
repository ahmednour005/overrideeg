import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpParams } from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { ServiceService } from './services/service.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    ServiceService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
