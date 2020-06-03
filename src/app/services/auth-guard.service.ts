import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private authServ: AuthService, private router: Router, private route: ActivatedRoute) { }

  canActivate(route, state) {
    return this.authServ.user$.pipe(map(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(['/login'], {relativeTo: this.route , queryParams: { returnUrl:state.url } });
        return false;
      }
    }))
    }
}
