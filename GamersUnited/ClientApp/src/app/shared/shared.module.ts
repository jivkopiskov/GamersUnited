import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from 'src/app/shared/nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';



@NgModule({
  declarations: [
    NavMenuComponent
  ],
  exports: [
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    ApiAuthorizationModule,
    RouterModule.forChild([]),
  ]
})
export class SharedModule { }
