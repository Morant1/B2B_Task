import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  users: User[] = [];
  loggedInUser = null;
  userMsg = false;
  
  subscription: Subscription
  constructor(private httpService: HttpServiceService,private router: Router) { }

  ngOnInit(): void {
    this.httpService.getUsers()
    this.subscription = this.httpService.user$.subscribe(users => {
      this.users = users;
    })
  }

  async onSignupHandler(signupCreds) {
    const loggedInUser = await this.httpService.signup(signupCreds);
    loggedInUser.subscribe(loggedInUser => {
      this.loggedInUser = loggedInUser
      this.onRedirect();
    });
  }

  async onLoginHandler(loginCreds) {
 
    const loggedInUser = await this.httpService.login(loginCreds);
    loggedInUser.subscribe(
      loggedInUser => {
        this.loggedInUser = loggedInUser
        this.onRedirect()
      },
      err => {
        this.loggedInUser = err;
        this.userMsg = true;
      },



    );

    
  }
  
  onRedirect():void {
    this.router.navigateByUrl('/info');
  }

}
