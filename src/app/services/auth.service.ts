import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { switchMap } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router';
import { appUsers } from '../interfaces/user.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$:Observable<firebase.User>;
  newUser: any;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase,
     private router: Router, private route: ActivatedRoute,private UService:UserService) {
      this.user$ = afAuth.authState;
      }


  signup(user) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(
      userCreate => {
        this.newUser = user;
        userCreate.user.updateProfile({
          displayName: user.username
        });
        this.inserUserData(userCreate).then(() => { this.router.navigate(['/'], { relativeTo: this.route }); })
      })
  }
  inserUserData(userCreate: firebase.auth.UserCredential) {
    return this.db.database.ref('users/' + userCreate.user.uid).set({
      username: this.newUser.username,
      email: this.newUser.email,
      password: this.newUser.password,
      isAdmin: false
    })
  }




  login(email, password) {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')||'/';
    localStorage.setItem('returnUrl',returnUrl);
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    this.afAuth.auth.signOut();
  }
  get AppUser$():Observable<appUsers>{
    return this.user$.pipe(switchMap(
        user=>{
          if(user){
            return this.UService.getUser(user.uid).valueChanges();
          }else{
          return of(null);
          }
        }
  )) 
  } 
}
