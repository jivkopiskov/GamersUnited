import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { ApplicationPaths } from './api-authorization.constants';
import { HttpClientModule } from '@angular/common/http';
import { ForbidAuthorized } from './authorize.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(
      [
        { path: ApplicationPaths.Register, component: LoginComponent, canActivate: [ForbidAuthorized] },
        { path: ApplicationPaths.Profile, component: LoginComponent, canActivate: [ForbidAuthorized] },
        { path: ApplicationPaths.Login, component: LoginComponent, canActivate: [ForbidAuthorized] },
        { path: ApplicationPaths.LoginFailed, component: LoginComponent },
        { path: ApplicationPaths.LoginCallback, component: LoginComponent },
        { path: ApplicationPaths.LogOut, component: LogoutComponent },
        { path: ApplicationPaths.LoggedOut, component: LogoutComponent },
        { path: ApplicationPaths.LogOutCallback, component: LogoutComponent }
      ]
    )
  ],
  declarations: [LoginMenuComponent, LoginComponent, LogoutComponent],
  exports: [LoginMenuComponent, LoginComponent, LogoutComponent]
})
export class ApiAuthorizationModule { }
