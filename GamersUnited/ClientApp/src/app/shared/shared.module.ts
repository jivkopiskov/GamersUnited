import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from 'src/app/shared/nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { LoaderComponent } from './loader/loader.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    NavMenuComponent,
    LoaderComponent
  ],
  exports: [
    NavMenuComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    ApiAuthorizationModule,
    MatProgressBarModule,
    RouterModule.forChild([]),
  ]
})
export class SharedModule { }
