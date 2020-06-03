import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';

const routes: Routes = [
 {path:'panel',
 loadChildren:()=>import('./panel/panel.module').then(p => p.PanelModule),canActivate:[AuthGuardService, AdminAuthGuardService]},
 {path:'landing',
 loadChildren:()=>import('./landing/landing.module').then(p => p.LandingModule)},
 {path: 'login', component:LoginComponent},
 {path: '', redirectTo: 'landing', pathMatch: 'full'},
 {path: ':anything', redirectTo: 'landing', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
