import {Component} from '@angular/core';
import {AuthenticationService} from "./security/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hardware App';

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']).then();
  }

}
