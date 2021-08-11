import { Component } from '@angular/core';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public authenticated : Observable<Boolean>;
  constructor(private authorize: AuthorizeService) {
    this.authenticated = authorize.isAuthenticated();
  }
}
