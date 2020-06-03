import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {


 
  constructor(private AuthSer:AuthService) { }

  canActivate():Observable<boolean>{
    return this.AuthSer.AppUser$.pipe(map((appUser:any)=>appUser.isAdmin)
    )
  }
}
