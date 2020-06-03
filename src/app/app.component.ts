import { Component, OnInit } from '@angular/core';
import { appUsers } from './interfaces/user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  appUser:appUsers;
  subscribe :Subscription;
    constructor( private AuthSer:AuthService,private route:ActivatedRoute,
      private router:Router) {
        this.AuthSer.user$.subscribe(
          user=>{
            if(user){
              let returnUrl= localStorage.getItem('returnUrl');
              if(!returnUrl) return;
              localStorage.removeItem('returnUrl');
              router.navigateByUrl(returnUrl);
            }
          }
        )
      AuthSer.AppUser$.subscribe(user=>this.appUser=user);
     }
  
   async ngOnInit() {
    }
  
   

  
  

  
    ngOnDestroy(){
      this.subscribe.unsubscribe();
    }
  
    logout(){
     this.AuthSer.logout();
     this.router.navigate(['/landing'],{relativeTo:this.route});
    }
}
